import Container from "./Container"
import addOne from '../assets/addOne.png'
import addTwo from '../assets/addTwo.png'
import addThree from '../assets/addThree.png'


const Offer = ()=> {
  return (
    <section className="py-5 lg:py-20">
        <Container>
            <div className="flex items-center space-x-2 lg:space-x-10">
                <div className="w-6/12">
                <img src={addOne} alt="addOne" className="w-full"/>
                </div>
                <div className="w-6/12 space-y-2 lg:space-y-8">
                <div>
                    <img src={addTwo} alt="addTwo" className="w-full"/>
                </div>
                <div>
                    <img src={addThree} alt="addThree" className="w-full"/>
                </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Offer;