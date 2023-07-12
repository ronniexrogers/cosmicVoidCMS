export default {
    name: 'photo',
    type: 'document',
      title: 'Photo',
    fields: [
      {
        name: 'tile',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'upload',
        type: 'image',
        title: 'Upload'
      }
    ]
  }