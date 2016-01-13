class API::V1::Messages < Grape::API # visit /api/v1/messages
  resource :messages do
    desc "Return list of messages"
    get do
      messages = Message.all
    end

  end
end
