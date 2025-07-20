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
    "republic of korea (south korea)",
    "south korea, seoul",
    "korea, republic of (south)"
]

// 드롭다운 요소를 감지하는 함수
function formatDropdown(dropdown) {
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
}

function selectKorea(dropdown) {
    dropdown.options.forEach(option => {
        // koreaDictionary에 포함된 게 있는 지 확인
        if (!koreaDictionary.includes(option.text.toLowerCase())) {
            return;
        }

        // select 태그인 경우
        if (dropdown.type === 'select' && dropdown.element.value !== option.value) {
            dropdown.element.value = option.value;
            const event = new Event('change', { bubbles: true });
            dropdown.element.dispatchEvent(event);
            return;
        }

        // 커스텀 드롭다운인 경우
        const items = dropdown.element.querySelectorAll('li, .dropdown-item, [role="option"]');
        items.forEach(item => {
            if (item.textContent.trim().toLowerCase() === option.text.toLowerCase()) {
                item.click();
            }
        });
    });
}

window.addEventListener('click', (event) => {
    const target = event.target;
    const clickedDropdown = target.closest('select, [role="combobox"], [role="listbox"], .dropdown, .select, [data-dropdown], li');

    if (clickedDropdown) {
      const formattedDropdown = formatDropdown(clickedDropdown);
  
      if (formattedDropdown) {
        selectKorea(formattedDropdown);
      }
      return;
    }
  
    setTimeout(() => {
      const allOptions = detectReactSelect();
      selectReactSelect(allOptions);
    }, 100);
  });
  
  function detectReactSelect() {
    return document.querySelectorAll('[id^="react-select-"][id*="-option-"]');
  }
  
  function selectReactSelect(allOptions) {
    allOptions.forEach((option) => {
      const text = option.textContent.trim().toLowerCase();
      if (koreaDictionary.includes(text)) {
        option.click();
      }
    });
  }