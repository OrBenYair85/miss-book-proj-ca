const {useState} = React

export function LongTxt ({txt, maxLength = 100}){


const [isExpand, setIsExpand] = useState(false)

function readMoreHandler(){
setIsExpand(!isExpand)
}

return(
    <div>
        <p>{isExpand ? txt : (txt.slice(0, maxLength) + '...')}</p>
        {txt.length > maxLength && (
            <span className="read-more" onClick={readMoreHandler}>
                {isExpand ? 'Read Less' : 'Read More'}
            </span>
        )}
    </div>
)

}