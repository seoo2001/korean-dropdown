// 한국 명칭 목록
const koreaDictionary = [
    "south korea",
    "korea, south",
    "republic of korea",
    "korea, republic of",
    "rok",
    "korea (south)",
    "korea (republic of)",
    "korea",
    "south korea (republic of)",
    "korea south",
    "대한민국",
    "korea (rok)",
    "korean",
    "korea republic",
    "korea, rep.",
    "korea, republic",
    "korea rep",
    "korea (rep.)",
    "korea (republic)",
    "republic of korea (south korea)"
]

// 드롭다운 감지 즉시 시작
const dropdowns = detectDropdowns();
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
        const info = {
            element: dropdown,
            type: dropdown.tagName.toLowerCase(),
            classes: Array.from(dropdown.classList),
            id: dropdown.id,
            role: dropdown.getAttribute('role'),
            ariaExpanded: dropdown.getAttribute('aria-expanded'),
            position: dropdown.getBoundingClientRect(),
            options: []
        };

        // select 요소인 경우 options 정보 수집
        if (info.type === 'select') {
            info.options = Array.from(dropdown.options).map(option => ({
                text: option.text,
                value: option.value,
                selected: option.selected
            }));
        }
        // ul/div 기반 커스텀 드롭다운인 경우
        else {
            const items = dropdown.querySelectorAll('li, .dropdown-item, [role="option"]');
            info.options = Array.from(items).map(item => ({
                text: item.textContent.trim(),
                value: item.getAttribute('value') || item.getAttribute('data-value') || item.textContent.trim(),
                selected: item.classList.contains('selected') || 
                         item.getAttribute('aria-selected') === 'true' ||
                         item.classList.contains('active')
            }));
        }

        // 현재 선택된 값
        info.selectedValue = info.options.find(opt => opt.selected)?.value || '';
        info.selectedText = info.options.find(opt => opt.selected)?.text || '';

        return info;
    });

    return dropdownInfo;
}

function selectKorea(dropdowns) {
    dropdowns.forEach(dropdown => {
        dropdown.options.forEach(option => {
            if (koreaDictionary.includes(option.text.toLowerCase())) {
                // select 태그인 경우
                if (dropdown.type === 'select' && dropdown.element.value !== option.value) {
                    dropdown.element.value = option.value;
                    const event = new Event('change', { bubbles: true });
                    dropdown.element.dispatchEvent(event);
                }
                // 커스텀 드롭다운인 경우
                else {
                    const items = dropdown.element.querySelectorAll('li, .dropdown-item, [role="option"]');
                    items.forEach(item => {
                        if (item.textContent.trim().toLowerCase() === option.text.toLowerCase()) {
                            // 클릭 이벤트 발생
                            item.click();
                        }
                    });
                }
            }
        });
    });
}

window.addEventListener('click', (event) => {
    // 눌린게 dropdown selector에 있는지 판단
    const target = event.target;
    const dropdowns = detectDropdowns();
    if (dropdowns.some(dropdown => dropdown.element.contains(target))) {
        selectKorea(dropdowns);
    }
});
