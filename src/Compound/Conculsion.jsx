import React, { useState, useEffect } from 'react';

export const MessagesComponent = () => {
  const messages = [
    "vedi podhu valapu cherigi",
    "vethike na kallu aarigi",
    "aiena parugagadhe",
    "ne vodine cherangaa...",
    "eetu veche gali chudu",
    "kalisamu kalalo ninna",
    "chei kalipi cheruvai",
    "sagali manam okatai",
    "Oh Srija Srija Oh Srija",
    "na oosure unte neethoti",
    "vedi podhu valapu cherigi",
    "vethike na kallu aarigi",
    "aiena parugagadhe",
    "ne vodine cherangaa...",
    "eetu veche gali chudu",
    "kalisamu kalalo ninna",
    "chei kalipi cheruvai",
    "sagali manam okatai",
    "Oh Srija Srija Oh Srija",
    "na oosure unte neethoti"
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  useEffect(() => {

    const timer = setTimeout(() => {
    setCurrentMessageIndex((prevIndex) => (prevIndex + 1)%messages.length);
    }, 800);

    return () => clearTimeout(timer);
  }, [currentMessageIndex, messages.length]);

  return (
    <div>
      <h1>{messages[currentMessageIndex]}</h1>
    </div>
  );
};


