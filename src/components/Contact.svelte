<script>
  import { afterUpdate } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { y, windowHeight } from '../store.js';
  import apiKeys from '../helpers/apikeys';
  import emailjs from 'emailjs-com';

  let confirmation;
  let visible = false;

  afterUpdate(() => {
    const header = document.getElementById('scroll-contact');
    let topHead = header.getBoundingClientRect().top;
    if ($y && topHead < $windowHeight && topHead > $windowHeight*-.75) {
      visible = true
    } else {
      visible = false
    }
  })

  function sendEmail(e) {
    const contact = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    confirmation = 
        `<h2>Thanks for reaching out ${contact.name}!</h2>
          <p><i>I appreciate that you took the time to write and will get back to you as soon as possible. Have a great day ahead!<i></p>`

    // emailjs
    // .send('gmail', apiKeys.TEMPLATE_ID, contact, apiKeys.USER_ID)
    // .then(result => {
    //   console.log(result.text)
    //   confirmation = 
    //     `<h2>Thanks for reaching out ${contact.name}!</h2>
    //      <p><i>I appreciate that you took the time to write and will get back to you as soon as possible. Have a great day ahead!<i></p>`
    // }, error => {
    //   console.log(error.text)
    //   confirmation = '<h4>An error occurred, please try again</h4>'
    // })
  }

  function confirmationMsg() {
    const message = document.getElementById('confirm-msg');
    if (confirmation) {
      message.setAttribute('style', 'visibility: visible');
      document.getElementById('contact-form').reset();
      setTimeout(() => {
        message.setAttribute('style', 'visibility: hidden');
        confirmation = undefined;
      }, 8000);

    } else {
      message.setAttribute('style', 'visibility: hidden');
    }
  };

  afterUpdate(() => {
    confirmationMsg();
  });

</script>

<style type="text/scss">
  @import '../styles/Contact.scss';
</style>

<div id='contact'>
  <div id='scroll-contact' class='top'/>
  <div class='inner-contact'>
    {#if visible}
      <h1 id='contact-head' in:fly="{{ x: -100, duration: 2000 }}" out:fade>
        <i>Drop me a line,</i> I'd love to hear from you:
      </h1>
    {/if}
    <form id="contact-form" on:submit|preventDefault="{sendEmail}">
      <input required type="name" id="name" placeholder="Name"/>
      <input required type="email" id="email" placeholder="Enter email"/>
      <textarea required type="text" id="message" placeholder="Your message"/>
      <button type="submit">Send</button>
    </form>
    <div id='confirm-msg'>{@html confirmation}</div>
  </div>
</div>
