/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
import Auth from '../services/auth';

const Logout = () => {
    Auth.logout();
    window.location.href = '/';
}

export default Logout;