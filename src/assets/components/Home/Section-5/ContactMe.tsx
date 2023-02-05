const ContactMe = () => {
    return(
        <div className="w-full h-full bg-main-extra-dark-blue m-auto min py-16">
        <h2 className="pt-8 font-bold text-silver uppercase text-2xl liNav link link-underline link-underline-black
max-w-fit w-full flex justify-center m-auto">Contact Me</h2> <br />
<input type="text" placeholder="Full Name"></input>
<input type="text" placeholder="E-mail"></input>
<form>
    <textarea>
        Message
    </textarea>
</form>
</div>
    )
}

export default ContactMe;