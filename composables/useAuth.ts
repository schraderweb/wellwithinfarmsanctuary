// composables/useAuth.ts

import { ref, Ref } from 'vue';
import { Auth, User, getAuth, signInWithEmailAndPassword, signOut as firebaseSignOut, onAuthStateChanged } from 'firebase/auth';

interface UseAuth {
  user: Ref<User | null>;
  error: Ref<string | null>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isAuthenticated: () => boolean;
  loading:Ref<boolean | null>;
}

export default function useAuth(): UseAuth {
  const user = ref<User | null>(null);
  const error = ref<string | null>(null);
  const loading = ref<boolean>(true);
  const nuxtApp:any = useNuxtApp()

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(nuxtApp.$auth, email, password);
    } catch (err) {
      error.value = "Something went Wrong! Please check.";
    }
  };
  const isAuthenticated = () => {
    return user.value !== null;
  }
  const signOut = async () => {
    try {
      await firebaseSignOut(nuxtApp.$auth);
    } catch (err) {
      error.value = "Something went Wrong! Please check.";
    }
  };

  onAuthStateChanged(nuxtApp.$auth, (currentUser) => {
    user.value = currentUser;
    loading.value = false
  });



  return { user, error, signIn, signOut,isAuthenticated,loading };
}
