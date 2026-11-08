import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, RotateCcw, Monitor, Code, ShoppingCart, Sliders } from 'lucide-react';

export default function Hero3DCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [screenMode, setScreenMode] = useState<'agency' | 'code' | 'ecommerce'>('agency');
  const [cameraView, setCameraView] = useState<'perspective' | 'front' | 'angled'>('perspective');
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isHudCollapsed, setIsHudCollapsed] = useState(false);

  // References for animation state
  const stateRef = useRef({
    screenMode: 'agency',
    cameraView: 'perspective',
    isAutoRotating: true,
    mouse: { x: 0, y: 0 },
    targetRotation: { x: 0.1, y: -0.2 },
  });

  // Sync state to ref
  useEffect(() => {
    stateRef.current.screenMode = screenMode;
    stateRef.current.cameraView = cameraView;
    stateRef.current.isAutoRotating = isAutoRotating;
  }, [screenMode, cameraView, isAutoRotating]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Detect software WebGL
    const isSoftwareGl = (() => {
      try {
        const gl = document.createElement('canvas').getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return true;
      }
    })();

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070B18, 0.04);

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 500;
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 5.2);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.replaceChildren(renderer.domElement);

    // Studio Lighting Rig
    const ambientLight = new THREE.AmbientLight(0x101a32, 1.2);
    scene.add(ambientLight);

    const hemisphereLight = new THREE.HemisphereLight(0x00d9ff, 0x8055f6, 1.5);
    scene.add(hemisphereLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    keyLight.position.set(3.5, 4.5, 4);
    keyLight.castShadow = !isSoftwareGl;
    if (keyLight.castShadow) {
      keyLight.shadow.mapSize.width = 1024;
      keyLight.shadow.mapSize.height = 1024;
      keyLight.shadow.bias = -0.0005;
      keyLight.shadow.normalBias = 0.02;
    }
    scene.add(keyLight);

    // Electric Cyan & Purple Rim Lights
    const cyanRim = new THREE.PointLight(0x00d9ff, 4.5, 12);
    cyanRim.position.set(-3.5, 2.5, -1.5);
    scene.add(cyanRim);

    const purpleRim = new THREE.PointLight(0x8055f6, 4.5, 12);
    purpleRim.position.set(3.5, -1.5, -2);
    scene.add(purpleRim);

    // Hero 3D Laptop Group
    const laptopGroup = new THREE.Group();
    scene.add(laptopGroup);

    // 1. Laptop Base (Bottom chassis)
    const baseGeo = new THREE.BoxGeometry(3.2, 0.1, 2.2);
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0x111625,
      metalness: 0.85,
      roughness: 0.22,
    });
    const laptopBase = new THREE.Mesh(baseGeo, metalMat);
    laptopBase.position.y = -0.05;
    laptopBase.castShadow = !isSoftwareGl;
    laptopBase.receiveShadow = !isSoftwareGl;
    laptopGroup.add(laptopBase);

    // Keyboard Deck Inset
    const kbGeo = new THREE.BoxGeometry(2.8, 0.02, 1.2);
    const kbMat = new THREE.MeshStandardMaterial({
      color: 0x090d16,
      roughness: 0.7,
      metalness: 0.3,
    });
    const keyboardDeck = new THREE.Mesh(kbGeo, kbMat);
    keyboardDeck.position.set(0, 0.01, -0.2);
    laptopGroup.add(keyboardDeck);

    // Trackpad
    const trackpadGeo = new THREE.BoxGeometry(1.0, 0.01, 0.65);
    const trackpadMat = new THREE.MeshStandardMaterial({
      color: 0x1a233a,
      roughness: 0.35,
      metalness: 0.5,
    });
    const trackpad = new THREE.Mesh(trackpadGeo, trackpadMat);
    trackpad.position.set(0, 0.01, 0.7);
    laptopGroup.add(trackpad);

    // 2. Laptop Lid & Screen (Tilted open)
    const lidGroup = new THREE.Group();
    lidGroup.position.set(0, 0, -1.1); // hinge pivot point
    laptopGroup.add(lidGroup);

    // Outer screen lid
    const lidGeo = new THREE.BoxGeometry(3.2, 2.15, 0.08);
    const lidMesh = new THREE.Mesh(lidGeo, metalMat);
    lidMesh.position.set(0, 1.075, 0);
    lidMesh.castShadow = !isSoftwareGl;
    lidGroup.add(lidMesh);

    // Screen Bezel
    const bezelGeo = new THREE.BoxGeometry(3.1, 2.05, 0.01);
    const bezelMat = new THREE.MeshBasicMaterial({ color: 0x05070e });
    const bezelMesh = new THREE.Mesh(bezelGeo, bezelMat);
    bezelMesh.position.set(0, 1.075, 0.045);
    lidGroup.add(bezelMesh);

    // 3. Dynamic Procedural Animated Screen Canvas Texture
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 1024;
    screenCanvas.height = 680;
    const ctx = screenCanvas.getContext('2d')!;

    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    screenTexture.colorSpace = THREE.SRGBColorSpace;
    screenTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    const screenSurfaceGeo = new THREE.PlaneGeometry(3.0, 1.95);
    const screenSurfaceMat = new THREE.MeshBasicMaterial({
      map: screenTexture,
      toneMapped: false,
    });
    const screenSurface = new THREE.Mesh(screenSurfaceGeo, screenSurfaceMat);
    screenSurface.position.set(0, 1.075, 0.052);
    lidGroup.add(screenSurface);

    // Set screen tilt angle (~105 degrees open)
    lidGroup.rotation.x = THREE.MathUtils.degToRad(-15);

    // 4. Contact Shadow Plane Grounding
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const sCtx = shadowCanvas.getContext('2d')!;
    const grad = sCtx.createRadialGradient(128, 128, 10, 128, 128, 120);
    grad.addColorStop(0, 'rgba(0, 0, 0, 0.7)');
    grad.addColorStop(0.5, 'rgba(0, 0, 0, 0.35)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    sCtx.fillStyle = grad;
    sCtx.fillRect(0, 0, 256, 256);

    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowGeo = new THREE.PlaneGeometry(4.8, 3.8);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false,
      opacity: 0.65,
    });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -0.9;
    scene.add(shadowPlane);

    // 5. Floating Surrounding UI Panels & Holographic Badges
    const floatingItems: THREE.Group[] = [];

    // Panel A: Floating Responsive Browser Card
    const panelAGroup = new THREE.Group();
    panelAGroup.position.set(-2.5, 0.8, 0.5);
    const panelAGeo = new THREE.PlaneGeometry(1.4, 0.9);
    const panelAMat = new THREE.MeshStandardMaterial({
      color: 0x101a32,
      roughness: 0.2,
      metalness: 0.4,
      transparent: true,
      opacity: 0.85,
    });
    const panelAMesh = new THREE.Mesh(panelAGeo, panelAMat);
    panelAGroup.add(panelAMesh);

    // Panel A border
    const edgesA = new THREE.LineSegments(
      new THREE.EdgesGeometry(panelAGeo),
      new THREE.LineBasicMaterial({ color: 0x00d9ff, linewidth: 2 })
    );
    panelAGroup.add(edgesA);
    scene.add(panelAGroup);
    floatingItems.push(panelAGroup);

    // Panel B: Floating Mobile Phone Wireframe
    const panelBGroup = new THREE.Group();
    panelBGroup.position.set(2.4, 0.6, 0.8);
    const phoneGeo = new THREE.BoxGeometry(0.7, 1.3, 0.05);
    const phoneMat = new THREE.MeshStandardMaterial({
      color: 0x121d38,
      roughness: 0.15,
      metalness: 0.8,
      transparent: true,
      opacity: 0.9,
    });
    const phoneMesh = new THREE.Mesh(phoneGeo, phoneMat);
    panelBGroup.add(phoneMesh);

    const phoneEdge = new THREE.LineSegments(
      new THREE.EdgesGeometry(phoneGeo),
      new THREE.LineBasicMaterial({ color: 0x8055f6 })
    );
    panelBGroup.add(phoneEdge);
    scene.add(panelBGroup);
    floatingItems.push(panelBGroup);

    // Panel C: Floating Code Badge `</>`
    const panelCGroup = new THREE.Group();
    panelCGroup.position.set(-1.8, -0.4, 1.2);
    const badgeGeo = new THREE.BoxGeometry(0.9, 0.45, 0.04);
    const badgeMat = new THREE.MeshStandardMaterial({
      color: 0x070b18,
      roughness: 0.2,
      metalness: 0.7,
      transparent: true,
      opacity: 0.9,
    });
    const badgeMesh = new THREE.Mesh(badgeGeo, badgeMat);
    panelCGroup.add(badgeMesh);

    const badgeEdge = new THREE.LineSegments(
      new THREE.EdgesGeometry(badgeGeo),
      new THREE.LineBasicMaterial({ color: 0x2563eb })
    );
    panelCGroup.add(badgeEdge);
    scene.add(panelCGroup);
    floatingItems.push(panelCGroup);

    // 6. Ambient Digital Particle Field
    const particleCount = isSoftwareGl ? 35 : 120;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePos[i * 3] = (Math.random() - 0.5) * 8;
      particlePos[i * 3 + 1] = (Math.random() - 0.5) * 5 + 0.5;
      particlePos[i * 3 + 2] = (Math.random() - 0.5) * 6;

      const isCyan = Math.random() > 0.5;
      particleColors[i * 3] = isCyan ? 0.0 : 0.5;
      particleColors[i * 3 + 1] = isCyan ? 0.85 : 0.33;
      particleColors[i * 3 + 2] = isCyan ? 1.0 : 0.96;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Mouse movement parallax
    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      stateRef.current.mouse.x = x;
      stateRef.current.mouse.y = y;
    };
    container.addEventListener('pointermove', handlePointerMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId = 0;
    let clock = new THREE.Clock();
    let tickCount = 0;

    const renderScreenContent = (time: number, mode: string) => {
      // Background
      ctx.fillStyle = '#070B18';
      ctx.fillRect(0, 0, 1024, 680);

      // Top Browser Bar
      ctx.fillStyle = '#101A32';
      ctx.fillRect(0, 0, 1024, 64);
      // Window controls
      ctx.fillStyle = '#FF5F56';
      ctx.beginPath();
      ctx.arc(32, 32, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#FFBD2E';
      ctx.beginPath();
      ctx.arc(56, 32, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#27C93F';
      ctx.beginPath();
      ctx.arc(80, 32, 7, 0, Math.PI * 2);
      ctx.fill();

      // URL bar
      ctx.fillStyle = '#080C1A';
      ctx.beginPath();
      ctx.roundRect(140, 16, 744, 32, 8);
      ctx.fill();
      ctx.fillStyle = '#00D9FF';
      ctx.font = '600 13px sans-serif';
      ctx.fillText('🔒 https://successinfotech.agency · Bhopal, MP (23.17° N, 77.41° E)', 160, 37);

      if (mode === 'agency') {
        // Agency Hero Mockup Mode
        // Brand logo & nav
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 20px sans-serif';
        ctx.fillText('SUCCESS INFOTECH', 48, 115);

        ctx.fillStyle = '#A9B4C8';
        ctx.font = '14px sans-serif';
        ctx.fillText('Home       Services       Our Work       About       Contact', 560, 115);

        // Hero headline
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 36px sans-serif';
        ctx.fillText('Your Vision. Our Innovation.', 48, 195);
        ctx.fillText('Your Digital Success.', 48, 245);

        // Subtext
        ctx.fillStyle = '#A9B4C8';
        ctx.font = '16px sans-serif';
        ctx.fillText('AI-Powered Website Development & Bespoke Digital Engineering in Bhopal', 48, 285);

        // CTA buttons
        ctx.fillStyle = '#2563EB';
        ctx.beginPath();
        ctx.roundRect(48, 315, 175, 46, 8);
        ctx.fill();
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 14px sans-serif';
        ctx.fillText('Start Your Project', 75, 344);

        ctx.strokeStyle = '#00D9FF';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(240, 315, 160, 46, 8);
        ctx.stroke();
        ctx.fillStyle = '#00D9FF';
        ctx.fillText('Explore Work', 275, 344);

        // Feature cards below
        const cardWidth = 285;
        const cardHeight = 220;
        const cards = [
          { title: 'AI-Powered Architecture', sub: 'Lightweight & Reactive' },
          { title: 'Custom UI/UX Systems', sub: 'Zero Template Genericness' },
          { title: 'Local Bhopal SEO', sub: 'Coordinates 23.17°N 77.41°E' },
        ];

        cards.forEach((c, idx) => {
          const cx = 48 + idx * (cardWidth + 38);
          const cy = 400;
          ctx.fillStyle = '#101A32';
          ctx.beginPath();
          ctx.roundRect(cx, cy, cardWidth, cardHeight, 12);
          ctx.fill();
          ctx.strokeStyle = 'rgba(0, 217, 255, 0.25)';
          ctx.stroke();

          // Card header bar
          ctx.fillStyle = '#2563EB';
          ctx.fillRect(cx + 20, cy + 24, 40, 6);

          ctx.fillStyle = '#FFFFFF';
          ctx.font = 'bold 17px sans-serif';
          ctx.fillText(c.title, cx + 20, cy + 65);

          ctx.fillStyle = '#A9B4C8';
          ctx.font = '13px sans-serif';
          ctx.fillText(c.sub, cx + 20, cy + 95);

          // Simulated layout wireframe lines
          ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
          ctx.fillRect(cx + 20, cy + 130, cardWidth - 40, 10);
          ctx.fillRect(cx + 20, cy + 155, cardWidth - 80, 10);
          ctx.fillRect(cx + 20, cy + 180, cardWidth - 60, 10);
        });
      } else if (mode === 'code') {
        // High-tech Live Code Stream Mode
        ctx.fillStyle = '#050811';
        ctx.fillRect(20, 80, 984, 580);

        ctx.font = '14px monospace';
        const lines = [
          '// Success Infotech Engine — AI Architecture Module',
          'import { buildModernExperience } from "@success-infotech/core";',
          '',
          'const clientProject = await buildModernExperience({',
          '  agency: "Success Infotech",',
          '  coordinates: [23.1723549, 77.4172171], // Bhopal, MP',
          '  stack: ["React 19", "TypeScript", "Tailwind CSS", "Three.js"],',
          '  speedIndex: "< 0.8s",',
          '  mobileFirst: true,',
          '  seoStructuredData: true',
          '});',
          '',
          '// Real-time Pipeline Compilation',
          `> Core Web Vitals audit: PASSED (Lighthouse 98/100)`,
          `> Asset bundling: Tree-shaking 100% active`,
          `> Frame latency: ${(16.6 + Math.sin(time * 3) * 0.4).toFixed(2)}ms @ 60 FPS`,
          `> Status: PRODUCTION READY & SCALABLE`,
        ];

        lines.forEach((line, i) => {
          if (line.startsWith('//')) ctx.fillStyle = '#5C7094';
          else if (line.startsWith('import') || line.startsWith('const')) ctx.fillStyle = '#00D9FF';
          else if (line.includes('"')) ctx.fillStyle = '#8055F6';
          else if (line.startsWith('>')) ctx.fillStyle = '#22C55E';
          else ctx.fillStyle = '#A9B4C8';

          ctx.fillText(line, 45, 120 + i * 28);
        });
      } else {
        // E-Commerce Storefront Mode
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 24px sans-serif';
        ctx.fillText('NOVA LUXE STOREFRONT', 48, 115);
        ctx.fillStyle = '#A9B4C8';
        ctx.font = '14px sans-serif';
        ctx.fillText('Cart (3 items) · Wishlist · Checkout', 720, 115);

        // Product row
        const pWidth = 285;
        for (let i = 0; i < 3; i++) {
          const px = 48 + i * (pWidth + 38);
          ctx.fillStyle = '#101A32';
          ctx.beginPath();
          ctx.roundRect(px, 150, pWidth, 470, 12);
          ctx.fill();

          ctx.fillStyle = '#1A294C';
          ctx.beginPath();
          ctx.roundRect(px + 16, 166, pWidth - 32, 220, 8);
          ctx.fill();

          ctx.fillStyle = '#FFFFFF';
          ctx.font = 'bold 18px sans-serif';
          ctx.fillText(`Luxe Collection Item 0${i + 1}`, px + 20, 425);

          ctx.fillStyle = '#00D9FF';
          ctx.font = 'bold 16px monospace';
          ctx.fillText(`$${(189 + i * 45).toFixed(2)}`, px + 20, 460);

          ctx.fillStyle = '#2563EB';
          ctx.beginPath();
          ctx.roundRect(px + 20, 495, pWidth - 40, 40, 8);
          ctx.fill();
          ctx.fillStyle = '#FFFFFF';
          ctx.font = 'bold 13px sans-serif';
          ctx.fillText('Add To Bag', px + 105, 520);
        }
      }

      screenTexture.needsUpdate = true;
    };

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();
      tickCount++;

      // Update screen content every 4 frames for performance
      if (tickCount % 4 === 0) {
        renderScreenContent(elapsed, stateRef.current.screenMode);
      }

      // Smooth auto-rotation or pointer tracking
      if (!prefersReducedMotion) {
        if (stateRef.current.isAutoRotating) {
          laptopGroup.rotation.y = THREE.MathUtils.damp(
            laptopGroup.rotation.y,
            Math.sin(elapsed * 0.4) * 0.35 - 0.15,
            2,
            delta
          );
          laptopGroup.rotation.x = THREE.MathUtils.damp(
            laptopGroup.rotation.x,
            0.1 + Math.sin(elapsed * 0.6) * 0.05,
            2,
            delta
          );
        } else {
          // Track pointer
          const targetY = stateRef.current.mouse.x * 0.45;
          const targetX = -stateRef.current.mouse.y * 0.25 + 0.1;
          laptopGroup.rotation.y = THREE.MathUtils.damp(laptopGroup.rotation.y, targetY, 3, delta);
          laptopGroup.rotation.x = THREE.MathUtils.damp(laptopGroup.rotation.x, targetX, 3, delta);
        }

        // Gentle floating wave for laptop and panels
        laptopGroup.position.y = Math.sin(elapsed * 0.8) * 0.08;
        panelAGroup.position.y = 0.8 + Math.sin(elapsed * 1.1 + 1) * 0.06;
        panelBGroup.position.y = 0.6 + Math.sin(elapsed * 0.9 + 2) * 0.07;
        panelCGroup.position.y = -0.4 + Math.sin(elapsed * 1.3) * 0.05;

        // Particle subtle rotation
        particleSystem.rotation.y = elapsed * 0.02;
      }

      // Camera view transition
      let targetCamZ = 5.2;
      let targetCamY = 1.2;
      let targetCamX = 0;

      if (stateRef.current.cameraView === 'front') {
        targetCamZ = 4.0;
        targetCamY = 1.0;
        targetCamX = 0;
      } else if (stateRef.current.cameraView === 'angled') {
        targetCamZ = 4.6;
        targetCamY = 1.8;
        targetCamX = 1.8;
      }

      camera.position.x = THREE.MathUtils.damp(camera.position.x, targetCamX, 3, delta);
      camera.position.y = THREE.MathUtils.damp(camera.position.y, targetCamY, 3, delta);
      camera.position.z = THREE.MathUtils.damp(camera.position.z, targetCamZ, 3, delta);
      camera.lookAt(0, 0.7, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointermove', handlePointerMove);
      renderer.dispose();
      baseGeo.dispose();
      lidGeo.dispose();
      screenSurfaceGeo.dispose();
      screenTexture.dispose();
      particleGeo.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[520px] lg:h-[640px] flex flex-col items-center justify-center select-none overflow-hidden rounded-2xl border border-white/5 bg-[#070B18]/60">
      {/* 3D WebGL Canvas Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Ergonomic Bottom Control Dock (Zero Viewport Occlusion per Three.js skill) */}
      <div
        className={`absolute bottom-3 left-1/2 -translate-x-1/2 z-20 w-[95%] max-w-[560px] transition-transform duration-300 ${
          isHudCollapsed ? 'translate-y-[calc(100%-32px)]' : 'translate-y-0'
        }`}
      >
        {/* Toggle bar */}
        <div className="flex justify-center mb-1">
          <button
            onClick={() => setIsHudCollapsed(!isHudCollapsed)}
            className="px-3 py-1 text-[11px] font-medium bg-[#101A32]/90 hover:bg-[#1B294E] text-[#A9B4C8] hover:text-white rounded-full border border-white/10 backdrop-blur-md transition-colors flex items-center gap-1.5 shadow-lg"
            title="Toggle 3D Controls"
          >
            <Sliders className="w-3 h-3 text-[#00D9FF]" />
            <span>{isHudCollapsed ? 'Show 3D View Controls' : 'Hide Controls'}</span>
          </button>
        </div>

        {/* Dock panel */}
        <div className="p-2.5 rounded-xl bg-[#101A32]/90 border border-white/10 backdrop-blur-md shadow-2xl flex flex-wrap items-center justify-between gap-2 text-xs">
          {/* Screen Content Mode Selector */}
          <div className="flex items-center gap-1 bg-[#070B18] p-1 rounded-lg border border-white/5">
            <button
              onClick={() => setScreenMode('agency')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                screenMode === 'agency'
                  ? 'bg-[#2563EB] text-white shadow-sm'
                  : 'text-[#A9B4C8] hover:text-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Agency UI</span>
            </button>
            <button
              onClick={() => setScreenMode('code')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                screenMode === 'code'
                  ? 'bg-[#2563EB] text-white shadow-sm'
                  : 'text-[#A9B4C8] hover:text-white'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              <span>Code Stream</span>
            </button>
            <button
              onClick={() => setScreenMode('ecommerce')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                screenMode === 'ecommerce'
                  ? 'bg-[#2563EB] text-white shadow-sm'
                  : 'text-[#A9B4C8] hover:text-white'
              }`}
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Storefront</span>
            </button>
          </div>

          {/* Camera Angles & Rotation Toggles */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setCameraView(cameraView === 'perspective' ? 'front' : 'perspective')}
              className="p-1.5 rounded-md bg-[#070B18] text-[#A9B4C8] hover:text-white border border-white/5 transition-colors"
              title="Switch Camera Perspective"
            >
              <Eye className="w-3.5 h-3.5 text-[#00D9FF]" />
            </button>
            <button
              onClick={() => setIsAutoRotating(!isAutoRotating)}
              className={`px-2 py-1 rounded-md text-[11px] font-medium transition-colors border border-white/5 ${
                isAutoRotating
                  ? 'bg-[#2563EB]/20 text-[#00D9FF] border-[#00D9FF]/30'
                  : 'bg-[#070B18] text-[#A9B4C8]'
              }`}
              title="Toggle Auto Floating Orbit"
            >
              <RotateCcw className="w-3 h-3 inline mr-1" />
              {isAutoRotating ? 'Float Active' : 'Manual Tilt'}
            </button>
          </div>
        </div>
      </div>

      {/* Floating 3D Spec Tag */}
      <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-md bg-[#101A32]/80 border border-white/10 text-[11px] text-[#A9B4C8] backdrop-blur-sm pointer-events-none">
        <span className="text-[#00D9FF] font-semibold">Interactive 3D Device</span> · Real-time WebGL
      </div>
    </div>
  );
}
