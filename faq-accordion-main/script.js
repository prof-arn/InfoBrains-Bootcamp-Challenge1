document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-accordion');
    faqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.FAQ-dropdown-header');
        if (!groupHeader) return;
        const group = groupHeader.parentElement;
        const groupbody = group.querySelector('.FAQ-dropdown-content');
        const icon = groupHeader.querySelector('.FAQ-icon');
        icon.classList.toggle('open');
        groupbody.classList.toggle('open');
        const otherGroups = faqContainer.querySelectorAll('.FAQ-dropdown');
        otherGroups.forEach((otherGroup) => {
            if(otherGroup!==group){
                const otherGroupBody = otherGroup.querySelector('.FAQ-dropdown-content');
                const otherIcon = otherGroup.querySelector('.FAQ-icon')
                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('open');
                
            }
        })
    });
});
