import { useEffect, useRef } from "react";
import * as THREE from "three";

type ServiceKind = "website" | "magazin-online" | "implementare-ai";

export function ServiceScene({ kind, image }: { kind: ServiceKind; image: string }) {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = sceneRef.current;
    if (!host) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        preserveDrawingBuffer: true,
        powerPreference: "low-power",
      });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 50);
    camera.position.set(0, 0, 8.8);

    const group = new THREE.Group();
    scene.add(group);
    scene.add(new THREE.HemisphereLight(0xffffff, 0x252525, 2.2));

    const accent =
      kind === "magazin-online" ? 0xf2bc24 : kind === "implementare-ai" ? 0x6bbfa9 : 0xe94e3d;
    const keyLight = new THREE.PointLight(accent, 38, 12);
    keyLight.position.set(-3, 3, 4);
    scene.add(keyLight);
    const fillLight = new THREE.PointLight(0xffffff, 22, 14);
    fillLight.position.set(3, -2, 4);
    scene.add(fillLight);

    const loader = new THREE.TextureLoader();
    const texture = loader.load(image);
    texture.colorSpace = THREE.SRGBColorSpace;
    const photoMaterial = new THREE.MeshBasicMaterial({ map: texture });
    const darkMaterial = new THREE.MeshStandardMaterial({
      color: 0x171717,
      metalness: 0.45,
      roughness: 0.3,
    });
    const accentMaterial = new THREE.MeshStandardMaterial({
      color: accent,
      metalness: 0.3,
      roughness: 0.28,
      emissive: accent,
      emissiveIntensity: 0.12,
    });
    const paleMaterial = new THREE.MeshStandardMaterial({
      color: 0xf4f1e9,
      metalness: 0.1,
      roughness: 0.4,
    });

    const addBox = (
      width: number,
      height: number,
      depth: number,
      material: THREE.Material,
      x: number,
      y: number,
      z: number,
    ) => {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material);
      mesh.position.set(x, y, z);
      group.add(mesh);
      return mesh;
    };

    const addPhotoPanel = (width: number, height: number, x: number, y: number, z: number) => {
      const panel = new THREE.Mesh(new THREE.PlaneGeometry(width, height), photoMaterial);
      panel.position.set(x, y, z);
      group.add(panel);
      return panel;
    };

    if (kind === "website") {
      addBox(4.05, 2.65, 0.16, darkMaterial, -0.15, 0.1, 0);
      addPhotoPanel(3.82, 2.38, -0.15, 0.1, 0.09);
      addBox(0.13, 0.55, 0.18, darkMaterial, -0.15, -1.53, 0);
      addBox(1.35, 0.12, 0.64, darkMaterial, -0.15, -1.85, 0);
      const phone = new THREE.Group();
      phone.position.set(1.5, -0.48, 0.48);
      phone.rotation.z = -0.12;
      group.add(phone);
      const phoneFrame = new THREE.Mesh(new THREE.BoxGeometry(0.78, 1.48, 0.11), darkMaterial);
      phone.add(phoneFrame);
      const phoneScreen = new THREE.Mesh(new THREE.PlaneGeometry(0.68, 1.33), photoMaterial);
      phoneScreen.position.z = 0.065;
      phone.add(phoneScreen);
    } else if (kind === "magazin-online") {
      const product = addBox(3.55, 2.72, 0.1, paleMaterial, -0.25, 0.05, 0);
      product.rotation.z = -0.045;
      const panel = addPhotoPanel(3.38, 2.52, -0.25, 0.05, 0.065);
      panel.rotation.z = -0.045;
      const bag = new THREE.Group();
      bag.position.set(1.7, -0.8, 0.52);
      bag.rotation.z = -0.08;
      group.add(bag);
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.92, 1.05, 0.42), accentMaterial);
      bag.add(body);
      const handle = new THREE.Mesh(
        new THREE.TorusGeometry(0.23, 0.035, 10, 28, Math.PI),
        darkMaterial,
      );
      handle.position.y = 0.57;
      handle.rotation.z = Math.PI;
      bag.add(handle);
      const parcel = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.45, 0.45), paleMaterial);
      parcel.position.set(-1.6, -1.35, 0.4);
      parcel.rotation.set(0.15, 0.3, -0.18);
      group.add(parcel);
    } else {
      const frame = addBox(2.45, 1.55, 0.12, darkMaterial, -0.1, 0, 0);
      frame.rotation.z = -0.04;
      const panel = addPhotoPanel(2.28, 1.38, -0.1, 0, 0.075);
      panel.rotation.z = -0.04;

      const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.38, 1), accentMaterial);
      core.position.set(0.05, 0.05, 0.42);
      group.add(core);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.55, 0.018, 8, 96), accentMaterial);
      ring.rotation.x = 0.6;
      ring.position.z = -0.3;
      group.add(ring);

      const nodes = [
        [-1.9, 1.2, 0.35],
        [1.95, 1.1, -0.1],
        [2.05, -1.1, 0.3],
        [-1.8, -1.25, -0.2],
        [0.2, 2, -0.5],
      ] as const;
      nodes.forEach(([x, y, z], index) => {
        const node = new THREE.Mesh(
          new THREE.SphereGeometry(index === 0 ? 0.16 : 0.12, 20, 20),
          index % 2 ? paleMaterial : accentMaterial,
        );
        node.position.set(x, y, z);
        group.add(node);
        const line = new THREE.Line(
          new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(0.05, 0.05, 0.42),
            new THREE.Vector3(x, y, z),
          ]),
          new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.5 }),
        );
        group.add(line);
      });
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.setAttribute("aria-hidden", "true");
    host.appendChild(renderer.domElement);

    const resize = () => {
      const { width, height } = host.getBoundingClientRect();
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.position.z = width < 560 ? 10 : 8.8;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      renderer.render(scene, camera);
    };

    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let spin = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onPointerMove = (event: PointerEvent) => {
      const bounds = host.getBoundingClientRect();
      targetY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.5;
      targetX = ((event.clientY - bounds.top) / bounds.height - 0.5) * -0.3;
    };
    const onPointerLeave = () => {
      targetX = 0;
      targetY = 0;
    };
    const onPointerDown = () => {
      spin += 0.16;
    };
    const render = (time: number) => {
      frame = window.requestAnimationFrame(render);
      if (!reducedMotion) {
        group.rotation.x += (targetX - group.rotation.x) * 0.035;
        group.rotation.y += (targetY + spin - group.rotation.y) * 0.035;
        group.position.y = Math.sin(time * 0.00055) * 0.055;
        spin *= 0.94;
      }
      renderer.render(scene, camera);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(host);
    host.addEventListener("pointermove", onPointerMove);
    host.addEventListener("pointerleave", onPointerLeave);
    host.addEventListener("pointerdown", onPointerDown);
    resize();
    frame = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      host.removeEventListener("pointermove", onPointerMove);
      host.removeEventListener("pointerleave", onPointerLeave);
      host.removeEventListener("pointerdown", onPointerDown);
      group.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Line) {
          object.geometry.dispose();
          if (Array.isArray(object.material))
            object.material.forEach((material) => material.dispose());
          else object.material.dispose();
        }
      });
      texture.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [image, kind]);

  return (
    <div
      className="service-scene"
      data-service={kind}
      aria-label={`Scenă interactivă pentru ${kind}`}
    >
      <img className="service-scene-poster" src={image} alt="" aria-hidden="true" />
      <div ref={sceneRef} className="service-scene-canvas" />
    </div>
  );
}
