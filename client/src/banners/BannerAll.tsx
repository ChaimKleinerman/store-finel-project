import { useEffect, useState } from 'react';
import BannerInterface  from '../types/Banner';

export default function BannerAll() {
  const [banner, setBanner] = useState<|BannerInterface| null>(null); 

  async function getProducts() {
    try {
      const response = await fetch('/banners/topBanners');
      if (!response.ok) {
        throw new Error('Failed to fetch banner');
      }
      const data = await response.json();
      console.log(data[0]);
      setBanner(data[0]);
    } catch (error) {
      console.error('Error fetching banner:', error);
      setBanner(null); 
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {banner ? (
        <div style={{ position: 'fixed', height: '500px', left: 0, top: 75, zIndex: 1000 }}>
          <img src={banner?.image.url} alt={banner?.image.alt} style={{ width: '100px' }} />
        </div>
      ) : (
        <p>Banner not available</p>
      )}
    </>
  );
}
