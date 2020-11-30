<script>
  import emailjs from 'emailjs-com';
  import { afterUpdate } from 'svelte';
  import apiKeys from '../apikeys';

  let confirmation;

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
      }, 5000);

    } else {
      message.setAttribute('style', 'visibility: hidden');
    }
  };

  afterUpdate(() => {
    confirmationMsg();
  });

</script>

<style type="text/scss">
  #contact {
    min-height: 80vh;
    background: linear-gradient(176deg, #006f69 70%, #FBEEC1 calc(70% + 2px));
    h1 {
      margin-top: 0;
      color:#6a040f;
      font-family: 'Libre Baskerville', serif;
      i {
        color:#FBEEC1;
      }
    }
    form {
      display: grid;
      margin: auto;
      width: 60%;
      input, textarea {
        border: none;
        color: #6a040f;
        background-color: #FBEEC1;
        &::placeholder {
          color: #011f51;
        }
        &:focus, &:active, &:hover {
          outline: none;
        }
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active  {
          box-shadow: 0 0 0 30px  #FBEEC1 inset;
          -webkit-box-shadow: 0 0 0 30px  #FBEEC1 inset !important;
          -webkit-text-fill-color: #6a040f !important;
        }
      }
      textarea {
        min-height: 8em;
      }
      button {
        margin: auto;
        font-size: 1.2em;
        color: #FBEEC1;
        border: 1px solid #FBEEC1;
        &:hover {
          color: #167974;
          background-color: #FBEEC1;
        }
      }
    }
    #confirm-msg {
      margin: auto;
      width: 60%;
      color: #FBEEC1;
    }
  }  
</style>

<div id='contact'>
  <div class='inner-contact'>
    <h1><i>Drop me a line,</i> I'd love to hear from you:</h1>
    <form id="contact-form" on:submit|preventDefault="{sendEmail}">
      <input required type="name" id="name" placeholder="Name"/>
      <input required type="email" id="email" placeholder="Enter email"/>
      <textarea required type="text" id="message" placeholder="Your message"/>
      <button type="submit">Send</button>
    </form>
    <div id='confirm-msg'>{@html confirmation}</div>
  </div>
</div>
