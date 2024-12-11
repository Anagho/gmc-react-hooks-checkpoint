import { Card, Tag, Button } from "antd";
import { FaStar } from "react-icons/fa";

const { Meta } = Card;

function MovieCard({ title, description, posterURL, rating }) {
  return (
    <Card
      hoverable
      cover={
        <img
          className="w-[500px] h-[300px] object-cover"
          alt="example"
          src={posterURL}
        />
      }
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <Meta
        // title={title}
        description={
          <div className="flex flex-col gap-3">
            <p>{description}</p>
            <div className="flex items-center text-lg">
              <strong>Rating:</strong>
              <div className="flex ml-2">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    color={index < rating ? "gold" : "lightgray"}
                  />
                ))}
              </div>
              <span className="ml-2">({rating})</span>
            </div>

            {/* <Link to={`/store/${props.petId}`}>
              <Button block>More details</Button>
            </Link> */}
          </div>
        }
      />
    </Card>
  );
}

export default MovieCard;
