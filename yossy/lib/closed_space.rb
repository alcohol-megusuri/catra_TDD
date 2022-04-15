class ClosedSpace
    attr_accessor :lower_endpoint_point, :upper_endpoint_point

    def initialize(lower_endpoint_point, upper_endpoint_point)
        raise StandardError, '下端点は上端点以下の整数を入力して下さい' if lower_endpoint_point > upper_endpoint_point

        @lower_endpoint_point = lower_endpoint_point
        @upper_endpoint_point = upper_endpoint_point
    end

    def to_interval
        "[#{lower_endpoint_point},#{upper_endpoint_point}]"
    end

    def include?(num)
        if (lower_endpoint_point <= num) && (num <= upper_endpoint_point)
            true
        else
            false
        end
    end

    def equal?(other_closed_space)
        if (lower_endpoint_point == other_closed_space.lower_endpoint_point) && (upper_endpoint_point == other_closed_space.upper_endpoint_point)
            true
        else
            false
        end
    end

    def completely_include?(other_closed_space)
        if (lower_endpoint_point <= other_closed_space.lower_endpoint_point) && (other_closed_space.upper_endpoint_point <= upper_endpoint_point)
            true
        else
            false
        end
    end
end