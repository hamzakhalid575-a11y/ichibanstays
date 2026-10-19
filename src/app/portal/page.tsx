"use client";

import React, { useState, useEffect } from "react";
import {
  auth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  fetchAllProjections,
  updateLeadStatus,
  User,
  ProjectionLead,
} from "@/lib/firebase";
import { ShieldCheck, LogOut, RefreshCw } from "lucide-react";

export default function PortalPage() {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("contact@ichibanstays.com");
  const [password, setPassword] = useState("");
  const [leads, setLeads] = useState<ProjectionLead[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (u) loadLeads();
    });
    return () => unsub();
  }, []);

  const loadLeads = async () => {
    try {
      const data = await fetchAllProjections();
      setLeads(data);
    } catch {
      // Demo fallback if Firebase is not yet connected
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      setError(err?.message || "Invalid credentials or Firebase project not yet configured.");
    }
  };

  if (!user) {
    return (
      <div className="py-20 max-w-md mx-auto px-4">
        <form
          onSubmit={handleLogin}
          className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg space-y-5"
        >
          <div className="flex items-center gap-2 text-[#1F8A88] font-semibold text-xs uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" /> Firebase Auth Portal
          </div>
          <h1 className="font-serif text-2xl font-bold text-slate-900">
            Admin & Landlord Sign In
          </h1>
          {error && (
            <div className="p-3 rounded-lg bg-red-50 text-red-700 text-xs">{error}</div>
          )}
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#1E4D3B] text-white font-semibold py-3 rounded-xl hover:bg-slate-800 text-sm"
          >
            Sign In with Firebase Auth
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div className="flex items-center justify-between bg-[#1E4D3B] text-white p-6 rounded-2xl">
        <div>
          <h1 className="font-serif text-2xl font-bold">Ichiban Stays — Firestore Leads Portal</h1>
          <p className="text-xs text-slate-400">Signed in as {user.email}</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={loadLeads}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={() => signOut(auth)}
            className="flex items-center gap-1.5 text-xs bg-red-600 hover:bg-red-500 px-3 py-2 rounded-lg"
          >
            <LogOut className="w-3.5 h-3.5" /> Sign Out
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 text-xs uppercase text-slate-600">
            <tr>
              <th className="p-4">Landlord</th>
              <th className="p-4">Property</th>
              <th className="p-4">Postcode</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {leads.map((l) => (
              <tr key={l.id}>
                <td className="p-4">
                  <div className="font-semibold">{l.firstName} {l.lastName}</div>
                  <div className="text-xs text-slate-500">{l.email} • {l.phone}</div>
                </td>
                <td className="p-4">{l.bedrooms} {l.propertyType} ({l.bathrooms})</td>
                <td className="p-4">{l.postcode}</td>
                <td className="p-4">
                  <select
                    value={l.status || "new"}
                    onChange={(e) =>
                      l.id && updateLeadStatus(l.id, e.target.value as any).then(loadLeads)
                    }
                    className="border border-slate-300 rounded px-2 py-1 text-xs"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="assessed">Assessed</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
