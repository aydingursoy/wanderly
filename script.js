function handleWaitlist(e){
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const status = document.getElementById('status');
  if(!email){
    status.textContent = 'Please enter a valid email.';
    return false;
  }

  // Simple, no-backend approach:
  // - Opens the user’s mail client with a pre-filled email
  // - You can replace this later with a real form endpoint (ConvertKit, Mailchimp, etc.)
  const subject = encodeURIComponent('WanderW Waitlist');
  const body = encodeURIComponent('Please add me to the WanderW waitlist: ' + email);
  window.location.href = 'mailto:youremail@example.com?subject=' + subject + '&body=' + body;

  status.textContent = 'Opening your email app…';
  return false;
}

document.getElementById('year').textContent = new Date().getFullYear();
