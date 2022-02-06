

const Notification = (props)=>{

    return (
        <section>
            <p>{props.status}</p>
            <p>{props.title}</p>
            <p>{props.message}</p>
        </section>
    )
}


export default Notification;