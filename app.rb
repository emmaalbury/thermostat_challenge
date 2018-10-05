require 'sinatra/base'

class ThermostatApp <Sinatra::Base
  enable :sessions

  get '/' do
    send_file 'public/index.html'
  end

  run! if app_file == $0
end
