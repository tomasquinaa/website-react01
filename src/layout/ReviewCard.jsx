

const ReviewCard = (props) => {
    return (
        <div className="w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
            <div>
                <p className="text-lightText">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ducimus, adipisci dolorum possimus dolore placeat cumque accusamus labore mollitia 
                    ratione! Laboriosam quam cumque facere, reiciendis aliquam earum quisquam soluta odio!
                </p>
            </div>
            <div className=" flex flex-row justify-center">
                <img className=" rounded-full w-1/4" src={props.img} alt="img" />
            </div>
        </div>
    )
}

export default ReviewCard