export function setCookie(name, value, days) {
	const expires = new Date();
	expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
	const cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
	document.cookie = cookie;
}

export function getCookie(name) {
	const cookieName = `${name}=`;
	const cookies = document.cookie.split(';');
	for (let i = 0; i < cookies.length; i++) {
		let cookie = cookies[i];
		while (cookie.charAt(0) === ' ') {
			cookie = cookie.substring(1);
		}
		if (cookie.indexOf(cookieName) === 0) {
			return cookie.substring(cookieName.length, cookie.length);
		}
	}
	return null;
}

export function removeCookie(name) {
	const expires = 'expires=Thu, 01 Jan 1970 00:00:00 UTC;'; // Set the expiration date to a past date
	const cookie = `${name}=;${expires};path=/`;
	document.cookie = cookie;
}
