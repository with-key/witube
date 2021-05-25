import mongoose from 'mongoose';

// db Schema 생성 -- 스키마 : DB 데이터의 타입 정보
// 스키마의 각 타입으로 데이터를 자동변환한다. ex. title에 number를 받아도, 몽구스가 string으로 변환해서 저장한다.
// 정보의 타입을 잘못보내면, 해당 데이터를 몽구스는 수집하지 않는다.
const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

const Video = mongoose.model('video', videoSchema);
export default Video;
