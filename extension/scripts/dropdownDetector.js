// 드롭다운 요소를 감지하는 함수
function detectDropdowns() {
    // 일반적인 드롭다운 선택자들
    const dropdownSelectors = [
        'select',                    // 기본 select 요소
        '[role="combobox"]',         // ARIA combobox 역할
        '[role="listbox"]',          // ARIA listbox 역할
        '.dropdown',                 // 일반적인 dropdown 클래스
        '.select',                   // 일반적인 select 클래스
        '[data-dropdown]',           // data-dropdown 속성
        '[aria-expanded]'            // aria-expanded 속성이 있는 요소
    ];

    // 모든 드롭다운 요소 찾기
    const dropdowns = document.querySelectorAll(dropdownSelectors.join(','));

    // 각 드롭다운 요소에 대한 정보 수집
    const dropdownInfo = Array.from(dropdowns).map(dropdown => {
        return {
            element: dropdown,
            type: dropdown.tagName.toLowerCase(),
            classes: Array.from(dropdown.classList),
            id: dropdown.id,
            role: dropdown.getAttribute('role'),
            ariaExpanded: dropdown.getAttribute('aria-expanded'),
            position: dropdown.getBoundingClientRect()
        };
    });

    return dropdownInfo;
}

// 드롭다운 변경 감지
function observeDropdownChanges() {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && 
                (mutation.attributeName === 'aria-expanded' || 
                 mutation.attributeName === 'class')) {
                const dropdownInfo = detectDropdowns();
                console.log('드롭다운 상태 변경 감지:', dropdownInfo);
            }
        });
    });

    // 페이지의 모든 요소 관찰
    observer.observe(document.body, {
        attributes: true,
        childList: true,
        subtree: true
    });
}

// 전역 객체에 함수들을 추가
window.dropdownDetector = {
    detectDropdowns,
    observeDropdownChanges
};
