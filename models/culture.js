import mongoose from 'mongoose'

const Schema = mongoose.Schema

const culutreSchema = new Schema({
  name: { type: String, required: true },
  lang: { type: String, required: true },
  popCultureTypes: [{
    type: String,
    enum: ['Movies','Music','Televison', 'Literature', 'Traditions'],
    default: 'Movies'
  }]
},{
  timestamps: true,
})

const Culture = mongoose.model('Culture', culutreSchema)

export { Culture }
