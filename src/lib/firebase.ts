import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "demo-api-key",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "ichibanstays-uk.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "ichibanstays-uk",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "ichibanstays-uk.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:123456789:web:abcdef",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
export const auth = getAuth(app);

export interface ProjectionLead {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  postcode: string;
  sizeSqFt: string;
  bathrooms: string;
  receptionRooms: string;
  bedrooms: string;
  propertyType: string;
  status?: "new" | "contacted" | "assessed";
  createdAt?: string;
}

export async function submitProjectionLead(lead: Omit<ProjectionLead, "id" | "status" | "createdAt">) {
  const docRef = await addDoc(collection(db, "projections"), {
    ...lead,
    status: "new",
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function submitContactInquiry(data: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  const docRef = await addDoc(collection(db, "inquiries"), {
    ...data,
    status: "unread",
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function submitConsultationBooking(data: {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
}) {
  const docRef = await addDoc(collection(db, "consultations"), {
    ...data,
    status: "new",
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function fetchAllProjections(): Promise<ProjectionLead[]> {
  const q = query(collection(db, "projections"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({
    id: d.id,
    ...(d.data() as Omit<ProjectionLead, "id">),
  }));
}

export async function updateLeadStatus(id: string, status: "new" | "contacted" | "assessed") {
  const ref = doc(db, "projections", id);
  await updateDoc(ref, { status });
}

export interface ConsultationBooking {
  id?: string;
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  status?: "new" | "contacted" | "assessed";
}

export async function fetchAllConsultations(): Promise<ConsultationBooking[]> {
  const q = query(collection(db, "consultations"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<ConsultationBooking, "id">) }));
}

export async function updateConsultationStatus(id: string, status: "new" | "contacted" | "assessed") {
  await updateDoc(doc(db, "consultations", id), { status });
}

export {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
};
export type { User };
