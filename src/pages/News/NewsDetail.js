import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BackgroundImage from '../../components/perts/BackInsole';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faXTwitter,
  faFacebookF, 
  faLine, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function NewsDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const colorbox = 'rgba(18,126,210,0.2)' // 1ページあたりの表示件数

  useEffect(() => {
    if (!id) return;
    
    setIsLoading(true);
    fetch(`https://earu-first.com/Blog/wp-json/wp/v2/posts/${id}?_embed`)
      .then(res => {
        if (!res.ok) {
          throw new Error('記事の取得に失敗しました');
        }
        return res.json();
      })
      .then(data => {
        setPost(data);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = post.title.rendered;
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      line: `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`,
      mail: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
    };

    if (platform === 'instagram') {
      alert('Instagramでの直接共有はできません。画像を保存して投稿してください。');
      return;
    }

    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  if (isLoading) {
    return (
      <div className="news-detail">
        <p>記事を読み込んでいます...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="news-detail">
        <p>エラー: {error}</p>
        <Link to="/news">← News一覧に戻る</Link>
      </div>
    );
  }

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const categories = post._embedded?.['wp:term']?.[0]?.map(cat => cat.name) || [];

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className='motion-wrapper'
    >
        <div className='body'>

            <div className="news-detail">
            
                <div className="news-detail__meta">
                    <span className="news-detail__date">
                    {new Date(post.date).toLocaleDateString('ja-JP', {
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric'
                    })}
                    </span>
                    {categories.map((category, index) => (
                    <span key={index} className="news-detail__category">
                        {category}
                    </span>
                    ))}
                </div>

                <h1 
                    className="news-detail__title"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }} 
                />

                {featuredImage && (
                    <div className="news-detail__image">
                    <img src={featuredImage} alt={post.title.rendered} />
                    </div>
                )}
            
                <div
                    className="news-detail__content"
                    dangerouslySetInnerHTML={{
                    __html: post.content.rendered
                    }}
                />

                <div className="news-detail__share">
                    <h3 className="news-detail__share-title">この記事をシェアする</h3>
                    <div className="news-detail__share-buttons">
                        <button 
                            onClick={() => handleShare('twitter')} 
                            className="share-button twitter"
                            aria-label="Share on Twitter"
                        >
                            <FontAwesomeIcon icon={faXTwitter} />
                        </button>
                        <button 
                            onClick={() => handleShare('facebook')} 
                            className="share-button facebook"
                            aria-label="Share on Facebook"
                        >
                            <FontAwesomeIcon icon={faFacebookF} />
                        </button>
                        <button 
                            onClick={() => handleShare('line')} 
                            className="share-button line"
                            aria-label="Share on LINE"
                        >
                            <FontAwesomeIcon icon={faLine} />
                        </button>
                        <button 
                            onClick={() => handleShare('instagram')} 
                            className="share-button instagram"
                            aria-label="Share on Instagram"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </button>
                        <button 
                            onClick={() => handleShare('mail')} 
                            className="share-button mail"
                            aria-label="Share via Email"
                        >
                            <FontAwesomeIcon icon={faEnvelope} />
                        </button>
                    </div>
                </div>

                <div className="news-detail__back-link">
                    <Link to="/news">← News一覧に戻る</Link>
                </div>
            </div>
            <BackgroundImage colorBox={colorbox}/>
            
        </div>

    </motion.div>
  );
}

export default NewsDetail;
