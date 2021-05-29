import mongoose from 'mongoose';

// db Schema 생성 -- 스키마 : DB 데이터의 타입 정보
// 스키마의 각 타입으로 데이터를 자동변환한다. ex. title에 number를 받아도, 몽구스가 string으로 변환해서 저장한다.
// 정보의 타입을 잘못보내면, 해당 데이터를 몽구스는 수집하지 않는다.
const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  createdAt: { type: Date, required: true, default: Date.now() },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
  },
});

// static은 내가 원하는 함수를 만들어 Model.xxx() 로 사용할 수 있다.
videoSchema.static('formatHashtags', function (hashtags) {
  return hashtags
    .split(',')
    .map((word) => (word.startsWith('#') ? word : `#${word}`));
});

//middle ware 설정
// 컨트롤러에서 db로 데이터를 저장하기 전에 중간에 원하는 작업을 할 때 미들웨어를 사용한다.
// this 는 Video에서 생성되는 video 객체를 의미한다.
// videoSchema.pre('save', async function () {
//   this.hashtags = this.hashtags.map((word) =>
//     word.startsWith('#') ? word : `#${word}`
//   );
// });
//👆 이것을 사용하지 않는 이유 : upload에서는 사용할 수 있으나, update에서는 기능을 쓰지 못함

const Video = mongoose.model('video', videoSchema);
export default Video;
