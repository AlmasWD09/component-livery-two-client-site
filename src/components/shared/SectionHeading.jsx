import LinePath from "./LinePath"


const SectionHeading = ({text1,text2,text3}) => {
  return (
    <>
    <div className="text-center pb-16">
          {/* custom line height */}
          <LinePath text={text1}/>
          <h2 className="font-BebasNeue text-6xl">{text2} <span className="text-primary">{text3}</span></h2>
        </div>
    </>
  )
}

export default SectionHeading