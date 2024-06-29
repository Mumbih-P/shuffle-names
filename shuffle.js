const friends = ["Maina", "Too", "Nzivu", "Wekesa", "Murife", "Swanya"];
        const months = ["July", "August", "September", "October", "November", "December"];
        const countdownElement = document.getElementById('countdown');
        const progressBar = document.getElementById('progressBar');
        const shuffleButton = document.getElementById('shuffleButton');

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        function shuffleFriends() {
            const shuffledFriends = shuffleArray([...friends]);
            const friendsList = document.getElementById('friendsList');
            friendsList.innerHTML = '';

            shuffledFriends.forEach((friend, index) => {
                const listItem = document.createElement('li');
                listItem.textContent = `${months[index]}: ${friend}`;
                friendsList.appendChild(listItem);
            });

            startCountdown(3 * 60); // Start a 3-minute countdown
        }

        function startCountdown(seconds) {
            let remainingTime = seconds;
            shuffleButton.disabled = true;

            const countdownInterval = setInterval(() => {
                const minutes = Math.floor(remainingTime / 60);
                const seconds = remainingTime % 60;
                countdownElement.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

                const progressPercentage = (remainingTime / (3 * 60)) * 100;
                progressBar.style.width = `${progressPercentage}%`;

                if (remainingTime <= 0) {
                    clearInterval(countdownInterval);
                    countdownElement.textContent = '';
                    shuffleButton.disabled = false;
                }

                remainingTime--;
            }, 1000);
        }