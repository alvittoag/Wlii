"use client";

// ** Import Next
import { useRouter } from "next/navigation";

// ** Import Other
import Swal from "sweetalert2";

const Logout = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");

    Swal.fire({
      title: "Berhasil Keluar",
      text: "Anda Telah Keluar",
      icon: "success",
    }).then(() => router.push("/"));
  };

  return (
    <div className="absolute bottom-8 cursor-pointer" onClick={handleLogout}>
      Keluar
    </div>
  );
};

export default Logout;
