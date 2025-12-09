import mongoose from "mongoose";

const chatHistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  documentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Document',
    required: true
  },
  message: [{
    role: {
      type: String,
      enum: ['user', 'assistant'],
      required: true
    },
    content: {
      type: String,
      required: true
    },
    timestamp: {
      type: Date,
      default: Date.now
    },
    relaventChunks: {
      type: [Number],
      default: []
    }
  }]
}, {
  timestamps: true
});

// Index for faster queries
chatHistorySchema.index({ userId: 1, docmuentId: 1 });

const ChatHistorySchema = mongoose.model('ChatHistory', chatHistorySchema);

export default ChatHistory;