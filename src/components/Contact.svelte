<script>
  import emailjs from 'emailjs-com';
  import { afterUpdate } from 'svelte';
  import apiKeys from '../apikeys';

  let confirmation

  const sendEmail = e => {
    const contact = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    }

    emailjs
    .send('gmail', apiKeys.TEMPLATE_ID, contact, apiKeys.USER_ID)
    .then(result => {
      console.log(result.text)
      confirmation = 
        `<h2>Thanks ${e.target.name.value}! Your message has been sent.</h2>
          <h4><i>I appreciate that you’ve taken the time to write and I'll get back to you very soon!<i></h4>`
    }, error => {
      console.log(error.text)
      confirmation = '<h4>An error occurred, please try again</h4>'
    })
  }

  function confirmationMsg() {
    const message = document.getElementById('confirm-msg')
    if (confirmation) {
      message.setAttribute('style', 'visibility: visible')
      document.getElementById('contact-form').reset()
      
      setTimeout(() => {
        message.setAttribute('style', 'visibility: hidden')
        confirmation = undefined
      }, 5000)

    } else {
      message.setAttribute('style', 'visibility: hidden')
    }
  }
  afterUpdate(() => {
    confirmationMsg()
  })

</script>

<style>
  #contact {
    min-height: 100vh;
    border: 1px dotted red;
    margin-top: 80px;
  }
  #contact h1 {
    margin-top: 50px;
  }
  form {
    margin: auto;
    width: 60%;
    display: grid;
  }
  #confirm-msg {
    text-align: center;
  }
</style>

<div id='contact'>
  <h1>CONTACT</h1>
  <form id="contact-form" on:submit|preventDefault="{sendEmail}">
    <input required type="name" id="name" placeholder="Name"/>
    <input required type="email" id="email" placeholder="Enter email"/>
    <textarea required type="text" id="message" placeholder="Your Message"/>
    <button type="submit">Send</button>
  </form>
  <div id='confirm-msg'>{@html confirmation}</div>
</div>
