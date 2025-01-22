

const LinePath = ({text}) => {
  return (
    <div className="flex items-center justify-center">
    <div className="h-[4px] w-20 bg-black"></div>
    <h4 className="font-BebasNeue text-2xl md:text-4xl mx-8">{text}</h4>
    <div className="h-[4px] w-20 bg-black"></div>
  </div>
  )
}
export default LinePath