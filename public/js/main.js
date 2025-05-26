function togglePassword(id) {
    const field = document.getElementById(id);
    const icon = document.getElementById("show-hide-password");
    field.type = field.type === "password" ? "text" : "password";
    icon.src = field.type === "password" ? "/LMS/public/images/hide_password.png" : "/LMS/public/images/show_password.png";
    return;
}
function showForm(formType) {
    if (formType === 'login') {
        document.getElementById('login-form').style.display = 'block';
    } else {
        document.getElementById('login-form').style.display = 'none';
    }
    
    if (formType === 'signup') {
        document.getElementById('signup-form').style.display = 'block';
    } else {
        document.getElementById('signup-form').style.display = 'none';
    }

    if (formType === 'login') {
        container.style.width = '400px'; // Smaller width for login
    } else if (formType === 'signup') {
        container.style.width = '1000px'; // Larger width for signup
    }
}
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-290px';
        mainContent.style.marginLeft = '0px';
    } else {
        sidebar.style.left = '0px';
        mainContent.style.marginLeft = '290px';
    }
}
function toggleSubMenu(event, num) {
    const subMenu = event.target.nextElementSibling;
    const parentLink = event.target;
    
    if (subMenu.style.display === 'block') {
        subMenu.style.display = 'none';
        parentLink.classList.remove('active');
        if (num == 1) {
            document.getElementById('arrow-1').innerHTML = "▶";
        }else if (num == 2) {
            document.getElementById('arrow-2').innerHTML = "▶";                   
        }else if (num == 3) {
            document.getElementById('arrow-3').innerHTML = "▶";    
        }else if (num == 4) {
            document.getElementById('arrow-4').innerHTML = "▶";
        }else if (num == 5) {
            document.getElementById('arrow-5').innerHTML = "▶";
        }else if (num == 6) {
            document.getElementById('arrow-6').innerHTML = "▶";
        }else if (num == 7) {
            document.getElementById('arrow-7').innerHTML = "▶";
        }else if (num == 8) {
            document.getElementById('arrow-8').innerHTML = "▶";
        }else if (num == 9) {
            document.getElementById('arrow-9').innerHTML = "▶";
        }else if (num == 10) {
            document.getElementById('arrow-10').innerHTML = "▶";
        }else {
            console.log("Invalid");
        }
    } else {
        if (num == 1) {
            document.getElementById('arrow-1').innerHTML = "▼";
            toggleSubMenuExtend();
            subMenu.style.display = 'block';
            parentLink.classList.add('active');
        }else if (num == 2) {
            document.getElementById('arrow-2').innerHTML = "▼";
            toggleSubMenuExtend();
            subMenu.style.display = 'block';
            parentLink.classList.add('active');
        }else if (num == 3) {
            document.getElementById('arrow-3').innerHTML = "▼";
            toggleSubMenuExtend();
            subMenu.style.display = 'block';
            parentLink.classList.add('active');
        }else if (num == 4) {
            document.getElementById('arrow-4').innerHTML = "▼";
            toggleSubMenuExtend();
            subMenu.style.display = 'block';
            parentLink.classList.add('active');
        }else if (num == 5) {
            document.getElementById('arrow-5').innerHTML = "▼";
            toggleSubMenuExtend();
            subMenu.style.display = 'block';
            parentLink.classList.add('active');
        }else if (num == 6) {
            document.getElementById('arrow-6').innerHTML = "▼";
            toggleSubMenuExtend();
            subMenu.style.display = 'block';
            parentLink.classList.add('active');
        }else if (num == 7) {
            document.getElementById('arrow-7').innerHTML = "▼";
            toggleSubMenuExtend();
            subMenu.style.display = 'block';
            parentLink.classList.add('active');
        }else if (num == 8) {
            document.getElementById('arrow-8').innerHTML = "▼";
            toggleSubMenuExtend();
            subMenu.style.display = 'block';
            parentLink.classList.add('active');
        }else if (num == 9) {
            document.getElementById('arrow-9').innerHTML = "▼";
            toggleSubMenuExtend();
            subMenu.style.display = 'block';
            parentLink.classList.add('active');
        }else if (num == 10) {
            document.getElementById('arrow-10').innerHTML = "▼";
            toggleSubMenuExtend();
            subMenu.style.display = 'block';
            parentLink.classList.add('active');
        }else {
            console.log("Invalid");
        }
    }
}
function toggleSubMenuExtend() {
    try {
        if (document.getElementById('id-1').classList.contains('active')) {
            document.getElementById('id-1').classList.remove('active');
            document.getElementById('id-1-1').style.display = 'none';
            document.getElementById('arrow-1').innerHTML = "▶";
        }
    }catch (error) {}
    try {
        if (document.getElementById('id-2').classList.contains('active')) {
            document.getElementById('id-2').classList.remove('active');
            document.getElementById('id-2-2').style.display = 'none';
            document.getElementById('arrow-2').innerHTML = "▶";
        }
    }catch (error) {}
    try {
        if (document.getElementById('id-3').classList.contains('active')) {
            document.getElementById('id-3').classList.remove('active');
            document.getElementById('id-3-3').style.display = 'none';
            document.getElementById('arrow-3').innerHTML = "▶";
        }
    }catch (error) {}
    try {
        if (document.getElementById('id-4').classList.contains('active')) {
            document.getElementById('id-4').classList.remove('active');
            document.getElementById('id-4-4').style.display = 'none';
            document.getElementById('arrow-4').innerHTML = "▶";
        }
    }catch (error) {}
    try {
        if (document.getElementById('id-5').classList.contains('active')) {
            document.getElementById('id-5').classList.remove('active');
            document.getElementById('id-5-5').style.display = 'none';
            document.getElementById('arrow-5').innerHTML = "▶";
        }
    }catch (error) {}
    try {
        if (document.getElementById('id-6').classList.contains('active')) {
            document.getElementById('id-6').classList.remove('active');
            document.getElementById('id-6-6').style.display = 'none';
            document.getElementById('arrow-6').innerHTML = "▶";
        }
    }catch (error) {}
    try {
        if (document.getElementById('id-7').classList.contains('active')) {
            document.getElementById('id-7').classList.remove('active');
            document.getElementById('id-7-7').style.display = 'none';
            document.getElementById('arrow-7').innerHTML = "▶";
        }
    }catch (error) {}
    try {
        if (document.getElementById('id-8').classList.contains('active')) {
            document.getElementById('id-8').classList.remove('active');
            document.getElementById('id-8-8').style.display = 'none';
            document.getElementById('arrow-8').innerHTML = "▶";
        }
    }catch (error) {}
    try {
        if (document.getElementById('id-9').classList.contains('active')) {
            document.getElementById('id-9').classList.remove('active');
            document.getElementById('id-9-9').style.display = 'none';
            document.getElementById('arrow-9').innerHTML = "▶";
        }
    }catch (error) {}
    try {
        if (document.getElementById('id-10').classList.contains('active')) {
            document.getElementById('id-10').classList.remove('active');
            document.getElementById('id-10-10').style.display = 'none';
            document.getElementById('arrow-10').innerHTML = "▶";
        }
    }catch (error) {}
}
function home(a) {
    if (a == "admin") {
        window.location.href = "/LMS/app/views/admin/dashboard.php";
    }
    if (a == "user") {
        window.location.href = "/LMS/app/views/users/dashboard.php";
    }
}
// Toggle dropdown display on click
function toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    const userName = document.querySelector('.user-name');
    
    // Toggle display
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';

    // Adjust width to match user-name width
    dropdown.style.width = `${userName.offsetWidth}px`;
}

// Close dropdown when clicking outside
window.addEventListener('click', function(event) {
    if (!event.target.closest('.user-dropdown')) {
        document.getElementById('dropdown').style.display = 'none';
    }
});
function confirmLogout(a) {
    if (a == "user") {
        const confirmed = confirm("Are you sure you want to log out?");
        if (confirmed) {
            window.location.href = "/LMS/user/logout";
        }
    }
    if (a == "admin") {
        const confirmed = confirm("Are you sure you want to log out?");
        if (confirmed) {
            window.location.href = "/LMS/admin/logout";
        }
    }
}
function displayAdminInfo(A_ID) {
    let R_MName, R_Image;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/LMS/admin/getAdminDetails', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            if (response.error) {
                alert("Cannot Retrieve Admin Info: " + response.error);
            } else {
                console.log("Fetched Admin Info:", response);
                R_Image = response.image === "N/A" 
                    ? '/LMS/public/images/profile-icon.png' 
                    : '/LMS/public/images/profileimg/' + response.image;

                const profileImageElement = document.getElementById('profile_image');
                if (profileImageElement) {
                    profileImageElement.src = R_Image;
                }

                const userNameDisplayElement = document.getElementById('user-name-display');
                if (userNameDisplayElement) {
                    userNameDisplayElement.textContent = response.l_name + ", " + response.f_name;
                }

                const displayNameElement = document.getElementById('display-name');
                if (displayNameElement) {
                    R_MName = response.m_name === "N/A" ? " " : " " + response.m_name[0] + ". ";
                    displayNameElement.textContent = response.f_name + R_MName + response.l_name;
                }
            }
        }
    };
    xhr.send(`id=${A_ID}`);
}

function displayUserInfo(U_ID) {
    let R_MName, R_Image;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/LMS/user/getUserDetails', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            if (response.error) {
                alert("Cannot Retrieve User Info: " + response.error);
            } else {
                console.log("Fetched User Info:", response);
                R_Image = response.image === "N/A" 
                    ? '/LMS/public/images/profile-icon.png' 
                    : '/LMS/public/images/profileimg/' + response.image;

                const profileImageElement = document.getElementById('profile_image');
                if (profileImageElement) {
                    profileImageElement.src = R_Image;
                }

                const userNameDisplayElement = document.getElementById('user-name-display');
                if (userNameDisplayElement) {
                    userNameDisplayElement.textContent = response.l_name + ", " + response.f_name;
                }

                const displayNameElement = document.getElementById('display-name');
                if (displayNameElement) {
                    R_MName = response.m_name === "N/A" ? " " : " " + response.m_name[0] + ". ";
                    displayNameElement.textContent = response.l_name + ", " + response.f_name + R_MName;
                }

                const yearLevelDisplayElement = document.getElementById('yearlvldisplay');
                if (yearLevelDisplayElement) {
                    yearLevelDisplayElement.textContent = response.year;
                }

                const courseDisplayElement = document.getElementById('coursedisplay');
                if (courseDisplayElement) {
                    let S_Course = "";
                    if (response.course === "BSIT") {
                        S_Course = "Bachelor of Science in Information Technology";
                    } else if (response.course === "BSBA") {
                        S_Course = "Bachelor of Science in Business Administration";
                    } else if (response.course === "BSCS") {
                        S_Course = "Bachelor of Science in Computer Science";
                    } else if (response.course === "BSED") {
                        S_Course = "Bachelor of Secondary Education";
                    } else {
                        S_Course = "Unknown Course";
                    }
                    courseDisplayElement.textContent = S_Course;
                }
            }
        }
    };
    xhr.send(`id=${U_ID}`);
}