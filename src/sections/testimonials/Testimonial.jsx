import Card from "../../components/Card";


function Testimonial({testimonial}) {
  return (
    <Card className="Light">
        <p>
            {testimonial.quote}
            <div className="testimonial_client">
                <div className="testimonial_client-avatar">
                    <img src={testimonial.avatar} alt="Testimonial Avatar" />
                </div>
                <div className="testimonial client-details">
                    <h6>{testimonial.name}</h6>
                    <small>{testimonial.profession}</small>
                </div>
            </div>
        
        </p>
    </Card>
  )
}

export default Testimonial