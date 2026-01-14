function handleWaitlist(e){
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const status = document.getElementById('status');
  if(!email){
    status.textContent = 'Please enter a valid email.';
    return false;
  }
  const subject = encodeURIComponent('Wonderly Waitlist');
  const body = encodeURIComponent('Please add me to the Wonderly waitlist: ' + email);
  window.location.href = 'mailto:youremail@example.com?subject=' + subject + '&body=' + body;
  status.textContent = 'Opening your email app…';
  return false;
}
document.getElementById('year').textContent = new Date().getFullYear();
