class API::V1::Ping < Grape::API # visit /api/v1/ping
  desc 'Returns pong.'
  get :ping do
    { ping: params[:pong] || 'pong' }
  end
end
