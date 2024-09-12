import { useState, useEffect } from "react";
import axios from "axios";

interface Response {
  message: string;
}

const List = () => {
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string | null>(null);  // Hata durumunu saklamak için state

  useEffect(() => {
    axios.get<Response>('http://localhost:8000')
      .then(response => {
        setMessage(response.data.message);  // Gelen veriyi state'e kaydet
        setError(null);  // Hata varsa temizle
      })
      .catch(error => {
        console.error('Veri çekme hatası:', error);
        setError('Veri çekme hatası');  // Kullanıcıya gösterilecek hata mesajı
      });
  }, []);

  return (
    <div>
      {/* Hata varsa göster */}
      {error && <p>{error}</p>}
      <p>{message}</p>
    </div>
  );
}

export default List;
