<script>
    const whatsappNumber = "18046504500";   // +1 (804) 650-4500

    const messageOptions = [
        { emoji: "🎵", title: "Music Feedback", message: "Hi Belmont, I just watched one of your latest movies and..." },
        { emoji: "🤝", title: "Collaboration", message: "Hey Belmont, I’d love to collaborate with you on a project..." },
        { emoji: "💡", title: "Ask for Advice", message: "Hi Belmont, I need some advice about..." },
        { emoji: "👋", title: "Just Saying Hi", message: "Hey Belmont! Just wanted to say I love your work ❤️" },
        { emoji: "🎤", title: "Fan Story", message: "Belmont, your movies helped me through a tough time because..." },
        { emoji: "🚀", title: "Business / Booking", message: "Hi Belmont, I have a business/booking opportunity for you..." }
    ];

    /**
     * Triggers a 4.5-second celebratory popup animation prior to running a callback function.
     * @param {Function} callback - The subsequent behavior to trigger upon layout closure.
     */
    function showCelebrityPopup(callback) {
        const popup = document.getElementById('celebrity-popup');
        popup.classList.remove('hidden');
        popup.classList.add('flex');
        
        setTimeout(() => {
            popup.classList.add('hidden');
            popup.classList.remove('flex');
            if (callback) callback();
        }, 4500);
    }

    /**
     * Opens WhatsApp directly with pre-filled message
     * @param {string} messageText - The message to pre-fill
     */
    function openWhatsapp(messageText) {
        const phone = whatsappNumber.replace(/\D/g, ''); // Clean phone number
        const text = messageText ? encodeURIComponent(messageText.trim()) : encodeURIComponent("Hi Belmont!");
        const finalUrl = `https://wa.me/\( {phone}?text= \){text}`;
        window.open(finalUrl, '_blank');
    }

    /**
     * Traverses standard options array, matches markup templates, and attaches event instances.
     */
    function createMessageCards() {
        const container = document.getElementById('message-options');
        if (!container) return;
        
        container.innerHTML = '';
        
        messageOptions.forEach(option => {
            const card = document.createElement('div');
            card.className = `message-card bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-3xl p-8 cursor-pointer`;
            card.innerHTML = `
                <div class="text-5xl mb-6">${option.emoji}</div>
                <h3 class="text-2xl font-semibold mb-3">${option.title}</h3>
                <p class="text-zinc-400 line-clamp-3">${option.message}</p>
            `;
            card.onclick = () => {
                showCelebrityPopup(() => openWhatsapp(option.message));
            };
            container.appendChild(card);
        });
    }

    /**
     * Collects input value strings directly from user context text areas
     * @param {string|null} structuralText - Explicit override argument option.
     */
    function handleCustomTextareaSubmit(structuralText = null) {
        if (structuralText) {
            showCelebrityPopup(() => openWhatsapp(structuralText));
            return;
        }

        const textarea = document.getElementById('custom-message');
        const message = textarea ? textarea.value.trim() : "";
        
        if (!message) {
            alert("Please write a message first 🙂");
            return;
        }
        
        showCelebrityPopup(() => openWhatsapp(message));
    }

    // Hero button support
    function sendCustomMessage(defaultMessage) {
        showCelebrityPopup(() => openWhatsapp(defaultMessage));
    }

    // Global runtime execution
    window.onload = function() {
        createMessageCards();
        
        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (!nav) return;

            if (window.scrollY > 50) {
                nav.classList.add('bg-black/95');
            } else {
                nav.classList.remove('bg-black/95');
            }
        });
    };
</script>