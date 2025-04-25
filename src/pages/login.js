import Link from 'next/link';

export default function Login() {
    return (
        <div className="login">
            <h1>Đăng nhập</h1>
            <form>
                <input type="text" placeholder="Tên đăng nhập" />
                <input type="password" placeholder="Mật khẩu" />
                <button type="submit">Đăng nhập</button>
            </form>
            <Link href="/">Quay lại trang chủ</Link>
        </div>
    );
}