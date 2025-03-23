import Star from '@mui/icons-material/Star';

const TestimonialCard = ({ testimonial }) => {
    return(
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="flex justify-center">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-20 h-20 rounded-full border-4 border-blue-500"
        />
      </div>
      <p className="text-gray-600 italic my-4 px-6">"{testimonial.text}"</p>
      <div className="flex justify-center mb-3">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={20} className="text-yellow-500" />
        ))}
      </div>
      <h4 className="text-lg font-semibold text-gray-700">
        {testimonial.name}
      </h4>
    </div>
    );
    
};

export default TestimonialCard;