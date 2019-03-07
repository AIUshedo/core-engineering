class Square
  attr_accessor(:side_length, :length)

    def initialize(side_length, length)
      self.length = length
      self.side_length = side_length
    end

    def calculate_area
      self.length ** 2
    end

    def calculate_perimeter
      self.length * 4
    end

    def make_lengths_area_and_perimeter
      area = calculate_area self.side_length
      perimeter = calculate_perimeter self.side_length
      puts "Area: #{self.area} Perimeter: #{self.perimeter}"
    end

    def factor_of_10cd
    self.side_length *= 10
    end

  def information
    puts "Area: #{self.calculate_area} Perimeter: #{self.calculate_perimeter}"
  end
  def info_2
    puts "Scale up by 10 is #{self.factor_of_10}"
  end
end
