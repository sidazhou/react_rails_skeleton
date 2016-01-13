class API::Root < Grape::API
  prefix 'api'
  format :json

  mount API::V1::Root
  # mount API::V2::Root (next version)
end
