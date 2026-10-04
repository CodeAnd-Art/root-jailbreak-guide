const guideData = [
  {
    title: 'Android Root Rehberi',
    type: 'Android',
    description: 'Cihaz uyumluluğu, yedekleme ve sistem kısıtlamaları hakkında bilinçli değerlendirme.',
    bullets: ['Model ve sürüm kontrolü', 'Garanti ve yedekleme', 'Yasal ve lisans değerlendirmesi']
  },
  {
    title: 'iPhone Jailbreak Rehberi',
    type: 'iOS',
    description: 'Sürüm uygunluğu, sistem güvenliği ve kullanıcı sorumluluğu ön plana alınır.',
    bullets: ['iOS uyumluluğu', 'Yasal durum', 'Risk ve güvenlik değerlendirmesi']
  },
  {
    title: 'Windows Yönetici / Root Benzeri',
    type: 'Windows',
    description: 'Yönetici yetkileri, sistem izinleri ve güvenlik politikaları değerlendirilir.',
    bullets: ['Güvenlik duvarı kontrolü', 'Düzgün yedekleme', 'Lisans ve izin yönetimi']
  },
  {
    title: 'macOS Root & Yetki Rehberi',
    type: 'macOS',
    description: 'Sistem dosyaları ve kullanıcı izinleri için bilinçli ve dikkatli yaklaşım.',
    bullets: ['İzin yönetimi', 'Yedekleme', 'Güncelleme uyumluluğu']
  },
  {
    title: 'Linux Root Kullanımı',
    type: 'Linux',
    description: 'Root erişiminde komut gücü, sorumluluk ve sistem güvenliği önemlidir.',
    bullets: ['sudo kontrolü', 'İzin ve dosya güvenliği', 'Yazılım yönetimi']
  },
  {
    title: 'Smart TV / Set Top Box',
    type: 'Ağ cihazı',
    description: 'Ağ ve cihaz güvenliği açısından dikkatli kullanım ve bilinçli değerlendirme.',
    bullets: ['Ağ güvenliği', 'Yazılım titreşimleri', 'Cihaz uyumluluğu']
  }
];

function renderGuideCards() {
  const container = document.getElementById('guideCards');
  if (!container) return;

  container.innerHTML = guideData.map((item) => `
    <article class="info-card shadow-soft">
      <span class="eyebrow">${item.type}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <ul>
        ${item.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>
    </article>
  `).join('');
}

function closeAlerts() {
  document.querySelectorAll('[data-close-alert]').forEach((button) => {
    button.addEventListener('click', () => {
      button.closest('.top-alert').style.display = 'none';
    });
  });
}

function analyseAssistant() {
  const type = document.getElementById('deviceType')?.value || 'Belirtilmemiş';
  const model = document.getElementById('deviceModel')?.value || 'Belirtilmemiş';
  const os = document.getElementById('osVersion')?.value || 'Belirtilmemiş';
  const note = document.getElementById('userNote')?.value || 'Belirtilmemiş';
  const tech = document.getElementById('techLevel')?.value || 'Belirtilmemiş';
  const checked = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(el => el.value);

  const resultBox = document.getElementById('assistantResult');
  if (!resultBox) return;

  const purposeText = checked.length ? checked.join(', ') : 'Belirtilmemiş';

  resultBox.innerHTML = `
    <div class="section-head left-align">
      <span class="eyebrow">Sonuç</span>
      <h2>Değerlendirme</h2>
    </div>
    <div class="result-summary">
      <p><strong>Cihaz tipi:</strong> ${type}</p>
      <p><strong>Marka / model:</strong> ${model}</p>
      <p><strong>İşletim sistemi:</strong> ${os}</p>
      <p><strong>Teknik seviye:</strong> ${tech}</p>
      <p><strong>Amaç:</strong> ${purposeText}</p>
      <p><strong>Ek not:</strong> ${note}</p>
    </div>
    <div class="risk-card-mini"> 
      <strong>Güvenli öneri:</strong>
      <p>Önce cihaz yedeğini alın, garanti ve lisans koşullarını kontrol edin, kullanım amacını netleştirin ve sadece uyumlu ve güvenli kaynakları tercih edin. AI önerileri rehber niteliğindedir; nihai karar kullanıcıya aittir.</p>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderGuideCards();
  closeAlerts();

  const button = document.getElementById('analyzeButton');
  if (button) {
    button.addEventListener('click', analyseAssistant);
  }
});
