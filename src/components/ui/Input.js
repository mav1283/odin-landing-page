function Input({type,label,placeholder, src, alt}){
    let input = {
        "button": <input type="button" value={label}/>,
        "checkbox": <input type="checkbox" />,
        "color": <input type="color" />,
        "date": <input type="date" />,
        "datetime-local": <input type="datetime-local" />,
        "email": <input type="email" />,
        "file": <input type="file" />,
        "hidden": <input type="hidden" />,
        "image": <input type="image" src={src} alt={alt}/>,
        "month": <input type="month" />,
        "number": <input type="number" />,
        "password": <input type="password" placeholder={placeholder} />,
        "radio": <input type="radio" />,
        "range": <input type="range" />,
        "reset": <input type="reset" />,
        "search": <input type="search" />,
        "submit": <input type="submit" value={label}/>,
        "tel": <input type="tel" />,
        "text": <input type="text" />,
        "time": <input type="time" />,
        "url": <input type="url" />,
        "week": <input type="week" />
    }

    return input[type];
    
}

export default Input;