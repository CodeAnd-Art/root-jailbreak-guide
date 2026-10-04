const devices = {
    android: {
        title: 'Android Cihazlar',
        text: 'Android cihazlar için root işlemleri, sistem dosyalarına erişim, custom ROM ve kernel değişiklikleri gibi yöntemler bulunur. Ancak güvenlik, garanti ve yazılım uyumluluğu açısından yüksek risk vardır.',
        checklist: [
            'Cihazın marka ve modeli doğru olmalı',
            'Bootloader kilidi açık olmalı',
            'Yedekleme yapılmalı',
            'Güvenlik açığı ve garanti iptali dikkate alınmalı',
            'Yasal ve lisans kısıtları kontrol edilmeli'
        ]
    },
    iphone: {
        title: 'iPhone / iOS',
        text: 'iPhone cihazlarda jailbreak, kısıtlamaları kaldırmak için kullanılan bir yöntemdir. Kullanıcı erişimi, uygulama kurulumları ve sistem değişiklikleri için sınırlı ama riskli bir süreçtir.',
        checklist: [
            'iOS sürümü uyumlu olmalı',
            'Ürün kilidi ve cihaz durumu kontrol edilmeli',
            'Resmi garanti kaybolur',
            'Cihaz yazılımı bozulabilir',
            'Bankacılık ve güvenlik uygulamaları etkilenebilir'
        ]
    },
    ipad: {
        title: 'iPad / iPadOS',
        text: 'iPad cihazlar için iOS benzeri yöntemler uygulanır. Güvenlik ve performans açısından dikkatli şekilde değerlendirilmelidir.',
        checklist: [
            'Sürüm uyumluluğu kontrol edilmeli',
            'Yazılım güncellemeleri etkilenebilir',
            'Cihazın işlevselliği riske girebilir',
            'Yasal ve lisans kısıtları incelenmeli'
        ]
    },
    windows: {
        title: 'Windows PC',
        text: 'Windows sistemlerinde yöntemler farklıdır: admin erişimi, bootloader düzenlemeleri, sistem dosya gömülü düzenlemeleri ve benzeri işlemler yapılabilir. Bu işlemler ciddi hata riskleri taşır.',
        checklist: [
            'Yönetici erişimi ve güvenlik duvarı ayarları kontrol edilmeli',
            'Sistem geri yükleme noktası oluşturulmalı',
            'Yazılım lisansı ve güvenlik politikaları değerlendirilmeli',
            'Açık kaynak vs lisanslı yazılım farkı bilinmeli'
        ]
    },
    macos: {
        title: 'macOS',
        text: 'macOS sistemlerinde root erişimi ve sistem düzenlemeleri yapılabilir. Ancak kullanılacak yöntemler farkı nedeniyle cihaz güvenliği, lisans ve yazılım uyumluluğu önemlidir.',
        checklist: [
            'Sistem sürümü ve Apple ID durumu kontrol edilmeli',
            'Root erişimi sistem güvenliğini azaltabilir',
            'Yazılım güncelleme yöneticisinin davranışı incelenmeli',
            'Veri yedekleme şarttır'
        ]
    },
    linux: {
        title: 'Linux',
        text: 'Linux sistemlerde root erişimi, yönetici yetkileri ile daha doğrudan kontrol sağlar. Ancak düzenleme hatası, sistem çökmesi ve güvenlik açığı riskleri vardır.',
        checklist: [
            'Kök kullanıcı erişimi yetkisi kontrol edilmeli',
            'Sistem dosyaları üzerinde değişiklik yapılacaksa yedek alınmalı',
            'Kullanıcı izinleri doğru ayarlanmalı',
            'Yasal kısıtlar ve paket yönetimi dikkate alınmalı'
        ]
    },
    tablet: {
        title: 'Android Tablet / Cihaz',
        text: 'Tabletlere uygulanan root ve modlama yöntemleri benzer şekilde yapılır. Sürücü, dosya sistemi ve güvenlik düzeni risk sebebidir.',
        checklist: [
            'Tablet modeli ve uyumluluğu doğrulanmalı',
            'Sistem yedeği alınmalı',
            'Uygulama uyumluluğu kontrol edilmeli',
            'Güvenlik ve güncellemeler dikkate alınmalı'
        ]
    },
    smarttv: {
        title: 'Smart TV / Set Top Box',
        text: 'Smart TV ve medya cihazlarında root benzeri erişim, önerilen uygulama güvenliği ve sistem kontrolleri ile etkilenebilir. İşlem kullanıcı güvenliği ve cihaz ömrü üzerinde risk taşır.',
        checklist: [
            'Cihaz üreticisinin güvenlik kısıtları öğrenilmeli',
            'Yazılım güncellemeleri etkilenebilir',
            'Kablosuz ağ güvenliği ve uygulama erişimi incelenmeli',
            'Ağ üzerindeki riskler dikkate alınmalı'
        ]
    }
};

const guides = [
    {
        title: 'Android Root Rehberi',
        tag: 'Android',
        description: 'Android cihazlar için root işlemine giriş yapmadan önce gerekli kullanımlar ve riskleri anlamak gerekir.',
        steps: [
            'Cihaz modelini doğrula',
            'Bootloader durumunu kontrol et',
            'Yedek al ve güncellemeleri sakla',
            'Riskleri ve lisans kısıtlarını incelen',
            'Şüpheli araçlar ve gereksiz yazılımlardan kaçın'
        ]
    },
    {
        title: 'iPhone Jailbreak Rehberi',
        tag: 'iOS',
        description: 'iPhone cihazlarda jailbreak, kısıtlı sistem üzerinde daha fazla erişim sağlar. Ancak güvenlik ve sistem bütünlüğü açısından dikkat gerektirir.',
        steps: [
            'iOS sürüm uyumluluğunu kontrol et',
            'Garantinin iptal olacağını bil',
            'Verilerini yedekle',
            'Resmî olmayan araçlardan kaçın',
            'Sonraki adımlara karşı hazırlıklı ol'
        ]
    },
    {
        title: 'Windows Yönetici Aşaması',
        tag: 'Windows',
        description: 'Windows sistemlerinde root benzeri işlemler, yönetici hakları ve sistem dosyalarıyla ilişkilidir. Çabuk müdahale hatalara neden olabilir.',
        steps: [
            'Yönetici hakları kontrol et',
            'Sistem geri yükleme noktası oluştur',
            'Uygulama izinlerini ve lisanslarını kontrol et',
            'Güvenlik duvarı ve virüsten koruma açıklarını değerlendir',
            'Sonradan rollback planı hazırla'
        ]
    },
    {
        title: 'macOS Root & Sistem Yetkileri',
        tag: 'macOS',
        description: 'macOS sistemlerde root erişimi güvenlik ve sistem uyumluluğu açısından saygılı şekilde kullanılmalıdır.',
        steps: [
            'Sistem sürümünü ve kullanıcı yetkilerini kontrol et',
            'Güvenlik modunu ve kilit açma seçeneklerini öğren',
            'Yedekleme yap',
            'Sistem güncellemelerini takip et',
            'Riskler ve lisans şartlarını tekrar oku'
        ]
    },
    {
        title: 'Linux Root Kullanımı',
        tag: 'Linux',
        description: 'Linux üzerinde root yönetimi güçlü ama dikkat isteyen bir yapıdadır. Hatalı komutlar sistemi bozar.',
        steps: [
            'Kök izinleri öğren',
            'Sudo kullanımını doğru uygula',
            'Yazılım paketlerini kontrol et',
            'Dosya sistemi ve izinleri kontrol et',
            'Yedek ve geri dönüş planı hazırla'
        ]
    },
    {
        title: 'Güvenli Adım Listesi',
        tag: 'Önlem',
        description: 'Her platform için ortak ve güvenli yöntemler değişikliklerin önünü açar.',
        steps: [
            'Cihaz yedeğini al',
            'Güvenlik açıklarını kontrol et',
            'Yasal ve lisans hakkını okuyup anla',
            'Sadece güvenli ve bilinen kaynaklardan araç kullan',
            'İşlemden sonra tekrar doğrulama yap'
        ]
    }
];

function closeBanner() {
    const banner = document.querySelector('.legal-banner');
    if (banner) banner.style.display = 'none';
}

function selectDevice(deviceKey) {
    const info = document.getElementById('device-info');
    const selected = devices[deviceKey];

    if (!selected) return;

    info.style.display = 'block';
    info.innerHTML = `
        <h3>${selected.title}</h3>
        <p>${selected.text}</p>
        <ul>
            ${selected.checklist.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;

    window.location.hash = 'quick-check';
}

function renderGuides() {
    const container = document.getElementById('guides-container');
    container.innerHTML = guides.map((guide) => `
        <div class="guide-card">
            <div class="tag">${guide.tag}</div>
            <h3>${guide.title}</h3>
            <p>${guide.description}</p>
            <ul>
                ${guide.steps.map(step => `<li>${step}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

function askAI() {
    const deviceType = document.getElementById('ai-device-type').value;
    const deviceModel = document.getElementById('ai-device-model').value || 'Belirtilmemiş';
    const osVersion = document.getElementById('ai-os-version').value || 'Belirtilmemiş';
    const techLevel = document.getElementById('ai-tech-level').value || 'Belirtilmemiş';
    const customQuestion = document.getElementById('ai-custom-question').value || 'Yok';

    const selectedPurpose = [...document.querySelectorAll('input[name="purpose"]:checked')].map(el => el.value);

    const purposeText = selectedPurpose.length ? selectedPurpose.join(', ') : 'Belirtilmemiş';

    const responseBox = document.getElementById('ai-response');

    const deviceLabel = deviceType ? deviceType : 'Belirtilmemiş';

    responseBox.style.display = 'block';
    responseBox.innerHTML = `
        <strong>AI değerlendirme sonucu:</strong><br><br>
        - Cihaz tipi: ${deviceLabel}<br>
        - Marka / Model: ${deviceModel}<br>
        - İşletim sistemi: ${osVersion}<br>
        - Teknik seviye: ${techLevel}<br>
        - Amaç: ${purposeText}<br>
        - Sorun / Ek soru: ${customQuestion}<br><br>

        <strong>Güvenli öneri:</strong><br>
        Bu cihaz için öncelikle güvenlik, garanti ve lisans durumunu kontrol edin. Uygulamadan önce cihaz yedeği alın, alakasız kaynaklardan yazılım ve araç kullanmayın, sistem düzeyinde değişiklik yapmadan önce riskleri ve yasal etkileri okuyun.<br><br>

        <strong>Risk notu:</strong><br>
        Root/jailbreak ve benzeri işlemler, cihazda veri kaybı, garanti iptali, sistem bozulması ve yasal riskler doğurabilir. Son karar ve sorumluluk kullanıcının kendi kontrolündedir.<br><br>

        <strong>Yapılacak doğru yaklaşım:</strong><br>
        1) Cihaz bilgilerini netleştir.<br>
        2) Yedekleme yap.<br>
        3) Sadece güvenilirmiş ve uyumlu kaynakları kullan.<br>
        4) Riskleri anla, uygulama öncesi uyarıları oku.<br>
        5) Gerekirse uzman desteği al.<br>
    `;
}

renderGuides();
