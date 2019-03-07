# Here, ::, tells us Sinatra is a module, and Base is a class inside that module
class PostsController < Sinatra::Base

  # Fixes reloader
  configure :development do
    register Sinatra::Reloader
  end

  # sets root as the parent-directory of the current file
  set :root, File.join(File.dirname(__FILE__), '..')

  # sets the view directory correctly
  set :views, Proc.new { File.join(root, "views") }

  # INDEX
  get "/" do
    # An instance variable. A variable attached to an instance of a class.
    # This sets the PostsController @posts variable = $posts. so PostsController.posts returns it
    @posts = Post.all

    # We bought it out of the controllers folder. It automatically knows to go into the views folder
    # Automatically puts .erb on the end
    erb :"posts/index.html"
  end

  # NEW
  get "/new" do
    @post = Post.new
    # {
    #   id: "",
    #   title: "",
    #   body: ""
    # }

    erb :"posts/new.html"
  end

  # SHOW
  get "/:id" do
    id = params[:id].to_i
    @post = Post.find id
    erb :"posts/show.html"

  end

  # EDIT
  get "/:id/edit" do
    id = params[:id].to_i
    @post = Post.find id
    erb :"posts/edit.html"

  end

  # CREATE
  post "/" do
    post = Post.new
    post.title = params[:title]
    post.body = params[:body]
    post.save

    redirect "/"
  end

  # UPDATE
  put "/:id" do
    id = params[:id].to_i
    post = Post.find id
    post.title = params[:title]
    post.body = params[:body]
    post.save

    redirect "/#{id}"
  end

  # DESTROY
  delete "/:id" do
    id = params[:id].to_i
    Post.destroy id

    redirect "/"
  end

end
