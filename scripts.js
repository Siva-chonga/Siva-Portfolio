
document.addEventListener('DOMContentLoaded', function() {
    const contactInfo = {
        name: 'Chonga Sivaramakrishna Satya Manikantha',
        email: 'sivachonga952@gmail.com',
        phone: '+91 6305201857',
    };

    const contactInfoDiv = document.getElementById('contactInfo');
    contactInfoDiv.innerHTML = `<p><strong>Name:</strong> ${contactInfo.name}</p>
                                <p><strong>Email:</strong> ${contactInfo.email}</p>
                                <p><strong>Phone:</strong> ${contactInfo.phone}</p>`;
});
