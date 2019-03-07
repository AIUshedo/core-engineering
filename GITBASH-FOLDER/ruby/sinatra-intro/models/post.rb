require "pg"

class Post
  attr_accessor :id, :title, :body

  # A Class Method. Method of the Class, NOT an instance (Hash/Object) of the Class.
  def self.open_connection
    return PG.connect(dbname: "blog", user: "postgres", password: "Password")
  end


  def self.all
    conn = self.open_connection
    sql = "SELECT * FROM post ORDER BY id;"
    results = conn.exec(sql)

    posts = results.map do |tuple|
      self.hydrate_data tuple
    end

    conn.close

    return posts
  end

  def self.hydrate_data post_data
    post = Post.new
    post.id = post_data["id"]
    post.title = post_data["title"]
    post.body = post_data["body"]

    return post
  end

  def self.find id
    conn = self.open_connection
    sql = "SELECT * FROM post WHERE id=#{id};"
    result = conn.exec(sql)[0]
    post = self.hydrate_data result

    conn.close

    return post
  end

  def save
    conn = Post.open_connection
    if self.id == nil
      sql = "INSERT INTO post(title, body) VALUES('#{self.title}', '#{self.body}');"
    else
      sql = "UPDATE post SET title='#{self.title}', body='#{self.body}' WHERE id=#{self.id};"
    end
    conn.exec(sql)

    conn.close
  end

  def self.destroy id
    conn = self.open_connection
    sql = "DELETE FROM post WHERE id=#{id}"
    conn.exec(sql)

    conn.close
  end

end
