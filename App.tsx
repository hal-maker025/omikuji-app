import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Fortune = {
  label: string;
  emoji: string;
  color: string;
  message: string;
};

const FORTUNES: Fortune[] = [
  { label: '大吉', emoji: '🌅', color: '#d4380d', message: '最高の運気。動くなら今日。' },
  { label: '吉',   emoji: '🌸', color: '#d48806', message: '良いことがありそう。' },
  { label: '中吉', emoji: '🍀', color: '#389e0d', message: 'おだやかに良し。' },
  { label: '小吉', emoji: '☘️', color: '#08979c', message: '小さな良いこと、ひとつ。' },
  { label: '凶',   emoji: '🌧️', color: '#595959', message: '無理せずやり過ごそう。' },
  { label: 'にゃん吉', emoji: '😺', color: '#eb2f96', message: 'にゃん。今日は猫に会えるかも。' },
];

export default function App() {
  const [fortune, setFortune] = useState<Fortune | null>(null);

  const draw = () => {
    const next = FORTUNES[Math.floor(Math.random() * FORTUNES.length)];
    setFortune(next);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>おみくじ</Text>

      <View style={styles.resultBox}>
        {fortune ? (
          <>
            <Text style={styles.emoji}>{fortune.emoji}</Text>
            <Text style={[styles.label, { color: fortune.color }]}>{fortune.label}</Text>
            <Text style={styles.message}>{fortune.message}</Text>
          </>
        ) : (
          <>
            <Text style={styles.emoji}>🎴</Text>
            <Text style={styles.placeholder}>下のボタンを押して引いてください</Text>
          </>
        )}
      </View>

      <Pressable
        onPress={draw}
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
      >
        <Text style={styles.buttonText}>{fortune ? 'もう一度引く' : 'おみくじを引く'}</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8e7',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#262626',
    marginBottom: 32,
    letterSpacing: 4,
  },
  resultBox: {
    width: '100%',
    minHeight: 260,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
    paddingHorizontal: 16,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  emoji: {
    fontSize: 72,
    marginBottom: 12,
  },
  label: {
    fontSize: 56,
    fontWeight: '700',
    marginBottom: 12,
    letterSpacing: 2,
  },
  message: {
    fontSize: 16,
    color: '#595959',
    textAlign: 'center',
  },
  placeholder: {
    fontSize: 16,
    color: '#8c8c8c',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#d4380d',
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 999,
    minWidth: 240,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  buttonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 2,
  },
});
