const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert(response.statusText);
  }
};

// document.querySelector('#logout').addEventListener('click', logout);
const logoutBtns = document.querySelectorAll('.logoutBtn');
logoutBtns.forEach(logoutBtn => {
  logoutBtn.addEventListener('click', logout);
});

//handles sidenav
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});